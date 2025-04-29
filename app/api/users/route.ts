import { NextResponse } from "next/server"
// Remove unused imports related to POST
// import { hash } from "bcryptjs"
// import { userSchema } from "@/lib/validations"
// import { createUser, findUserByEmail } from "@/lib/db-utils"

// Removed POST function
// export async function POST(request: Request) { ... }

export async function GET(request: Request) {
  try {
    // This dynamically imports the MongoDB client
    // Consider using dbConnect and Mongoose model for consistency if possible
    const client = await import("@/lib/mongodb").then((module) => module.default)
    const db = client.db("futsal_matcher") // Ensure DB name is correct

    const users = await db
      .collection("users") // Ensure collection name is correct
      .find({}, { projection: { password: 0 } }) // Exclude password field
      .toArray()

    return NextResponse.json({ users })
  } catch (error) {
    console.error("Error fetching users:", error)
    // Provide a more generic error message to the client
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 })
  }
}
