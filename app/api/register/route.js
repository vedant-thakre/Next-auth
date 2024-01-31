import { NextResponse } from "next/server";
import { connectDB } from "@/db/db";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();

    const user = await User.findOne({ email: email});

    if(user){
       return NextResponse.json({ message: "User Already Exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newuser = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered.", data: newuser, }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}