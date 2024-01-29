import { NextResponse } from "next/server";
import { connectDB } from "@/db/db";

export async function POST(req){
    try {
        const { name, email, password } = await req.json();
        await connectDB();
        console.log(name, email, password);
        return NextResponse.json({
            status: true,
            message: `Hello ${name}`,
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