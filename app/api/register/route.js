import { NextResponse } from "next/server";
import { connectDB } from "@/db/db";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";

export async function POST(req){
    try {
        const { name, email, password } = await req.json();
        const hash = await bcrypt.hash(password, 10);
        console.log(hash);
        await connectDB();
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