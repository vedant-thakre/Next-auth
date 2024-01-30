import { connectDB } from "@/db/db";
import { User } from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(req){
    try {
        await connectDB();
        const data = await User.find();
        return NextResponse.json({
            status: true,
            message: "All User Database",
            data: data,
        },
        { status : 201, });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: false,
            message: "Internel Server Error",
        },
        { status : 501 });
    }
}