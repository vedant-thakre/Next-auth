import { NextResponse } from "next/server";
import { connectDB } from "@/db/db";
import { User } from "@/models/userModel";

export async function GET(req) {
  try {
    console.log(req.params);
    const { id } = req.params;
    await connectDB();
    const user = await User.findById(id);
    return NextResponse.json(
      {
        status: true,
        message: `User Found`,
        data: user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: false,
        message: `User Not Found`,
      },
      {
        status: 500,
      }
    );
  }
}
