import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import dbConnect from "@/lib/dbConnect";
import Profile from "@/models/Profile";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const url = new URL(request.url);
    console.log("URL:", url);
    const position = url.searchParams.get("position");
    const skillLevel = url.searchParams.get("skillLevel");

    await dbConnect();

    const query: Record<string, any> = {};

    if (position && position !== "any") {
      query.position = position;
    }

    if (skillLevel && skillLevel !== "any") {
      query.skillLevel = skillLevel;
    }

    query.user = { $ne: session.user.id };

    const profiles = await Profile.find(query)
      .populate("user", "name email")
      .lean();

    console.log("Profiles found:", profiles);

    return NextResponse.json({ profiles });
  } catch (error) {
    console.error("Error searching profiles:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
