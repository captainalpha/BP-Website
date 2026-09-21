import connect from "@/lib/db";
import Job from "@/lib/db/models/job";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();

    const data = await Job.find({});

    return NextResponse.json(
      { success: true, data, message: "Fetched" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message, data: null },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await connect();

    const data = await Job.create(body);

    return NextResponse.json(
      { success: true, data, message: "Created" },
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

    const job = await Job.findById(body?.id);
    if (!job) throw new Error(`No job found with the id ${body?.id}`);

    const updated = await Job.findByIdAndUpdate(body?.id, body, { new: true });

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
