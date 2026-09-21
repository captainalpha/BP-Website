import connect from "@/lib/db";
import User from "@/lib/db/models/user";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { setNewToken } from "./auth-helpers";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body?.email) throw new Error("email is required");
    if (!body?.password) throw new Error("password is required");

    await connect();

    const user = await User.findOne({ email: body?.email });

    if (!user) throw new Error("Invalid email or password");

    const matchPassword = await bcrypt.compare(body?.password, user.password);
    if (!matchPassword) throw new Error("Invalid email or password");

    const userInToken: IUserInToken = {
      id: user?._id,
      name: user.name,
      phone: user.phone,
    };

    await setNewToken(userInToken);

    return NextResponse.json({
      success: true,
      data: userInToken,
      message: "Login Success",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message, data: null },
      { status: 500 }
    );
  }
}
