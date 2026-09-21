import connect from "@/lib/db";
import Job from "@/lib/db/models/job";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) throw new Error("id is required");
    if (!isValidObjectId(id)) throw new Error("A valid job id is required");
    await connect();

    const job = await Job.findById(id);

    return NextResponse.json(
      {
        success: true,
        data: job,
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
    if (!isValidObjectId(id)) throw new Error("A valid job id is required");
    await connect();

    const job = await Job.findByIdAndDelete(id);

    return NextResponse.json(
      {
        success: true,
        data: job,
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
