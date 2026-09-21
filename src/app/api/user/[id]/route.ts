import connect from "@/lib/db";
import User from "@/lib/db/models/user";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) throw new Error("id is required");
    if (!isValidObjectId(id)) throw new Error("A valid user id is required");
    await connect();

    const user = await User.findById(id).select("-password");

    return NextResponse.json(
      {
        success: true,
        data: user,
        message: "Fetched",
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) throw new Error("id is required");
    if (!isValidObjectId(id)) throw new Error("A valid user id is required");
    await connect();

    const user = await User.findByIdAndDelete(id);

    return NextResponse.json(
      {
        success: true,
        data: user,
        message: "Deleted",
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
