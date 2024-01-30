import { connectDB } from "@/db/db";
import { User } from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectDB();
        const { email } = await req.json();
        const user = await User.findOne({ email }).select("_id");
        return NextResponse.json(
          {
            status: true,
            data: user, 
          },
          {
            status: 500,
          }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
          {
            status: false,
            message: `Internel Server Error`,
          },
          {
            status: 500,
          }
        );
    }
}