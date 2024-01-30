import { NextResponse } from "next/server";
import { connectDB } from "@/db/db";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";

export async function POST(req){
    try {
        await connectDB();
        const { name, email, password } = await req.json();

        const userExist = await User.findOne({ email });

        if(userExist){
            return NextResponse.json(
              {
                status: false,
                message: `User Already Exist`,
              },
              {
                status: 400,
              }
            );
        }
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password:hash,
        });
        return NextResponse.json({
            status: true,
            message: `Hello ${name}`,
            data: newUser
        },
        {
            status: 201,
        }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: false,
            message: `Failed to Register`,
        },
        {
            status: 500,
        }
        );
    }
}