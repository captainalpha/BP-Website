import connect from "@/lib/db";
import User from "@/lib/db/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await connect();

    const user = await User.create(body);

    return NextResponse.json(
      {
        success: true,
        data: { ...user.toJSON(), password: undefined },
        message: "Created",
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message, data: null },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    await connect();

    if (!body?.id) throw new Error("id is required");

    const user = await User.findById(body?.id);
    if (!user) throw new Error(`No user found with the id ${body?.id}`);

    const updated = await User.findByIdAndUpdate(body?.id, body, { new: true });

    return NextResponse.json(
      {
        success: true,
        data: { ...updated.toJSON(), password: undefined },
        message: "Updated",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message, data: null },
      { status: 500 }
    );
  }
}
