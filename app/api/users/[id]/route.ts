import { NextResponse } from "next/server";

import User from "@/database/user.model";
import handleError from "@/lib/handler/error";
import { NotFoundError } from "@/lib/http-error";
import dbConnect from "@/lib/mongoose";

export async function GET(_: Request, { params }: RouteParams) {
  const { id } = await params;
  if (!id) throw new NotFoundError("ID");

  try {
    await dbConnect();

    const user = await User.findById(id);
    if (!user) throw new NotFoundError("User");

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error) as APIErrorResponse;
  }
}
