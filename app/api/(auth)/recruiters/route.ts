import connect from "@/app/lib/db"; // Importing the database connection utility
import Recruiter from "@/app/lib/modals/recruiter";
import { NextRequest, NextResponse } from "next/server"; // Importing types for the request and response in Next.js API routes
import { Types } from "mongoose"; // Importing Types from mongoose for handling MongoDB types

// Disable require() import rule for mongoose Types
// eslint-disable-next-line @typescript-eslint/no-require-imports
const ObjectId = require("mongoose").Types.ObjectId;

// GET request to fetch all recruiters
export const GET = async () => {
  try {
    // Connect to the database
    await connect();
    // Fetch all recruiters from the database
    const recruiters = await Recruiter.find();
    // Return the list of recruiters in the response
    return new NextResponse(JSON.stringify(recruiters), { status: 200 });
  } catch (error) {
    console.log("Error in fetching recruiters " + error.message, {
      status: 500,
    });
  }
  return new NextResponse("This is default response in case of any error.");
};

// POST request to create a new recruiter
export const POST = async (request: NextRequest) => {
  try {
    // Get the request body (user data)
    const body = await request.json();
    console.log(body);
    // Connect to the database
    await connect();
    // Create a new Recruiter instance with the received data
    const newRecruiters = new Recruiter(body);
    // Save the new recruiter to the database
    await newRecruiters.save();
    return new NextResponse(
      JSON.stringify({
        message: "Recruiter is created: ",
        recruiter: newRecruiters,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in creating recruiters " + error.message, {
      status: 500,
    });
    return new NextResponse(
      JSON.stringify({
        message: "Error in creating recruiters: " + error.message,
      }),
      { status: 500 }
    );
  }
};

// PATCH request to update an existing recruiter
export const PATCH = async (request: NextRequest) => {
  try {
    // Get the request body with the user's ID and the updated data
    const body = await request.json();
    const { userId, newUserName, newUserEmail, newUserPassword } = body;
    // Connect to the database
    await connect();

    // Validate if userId or newUserName is not provided
    if (!userId || !newUserName) {
      return new NextResponse(
        JSON.stringify({ message: "ID or new username not found" }),
        { status: 400 }
      );
    }

    // Validate if the provided userId is a valid MongoDB ObjectId
    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid user Id" }), {
        status: 400,
      });
    }

    // Proceed to find the user and update the data
    const updatedUser = await Recruiter.findOneAndUpdate(
      { _id: new ObjectId(userId) }, // Ensure the userId is valid as a MongoDB ObjectId
      { username: newUserName, password: newUserPassword, email: newUserEmail },
      { new: true }
    );

    if (!updatedUser) {
      return new NextResponse(
        JSON.stringify({ message: "Recruiter not found in database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "user is updated", user: updatedUser }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in updating recruiters" + error.message, {
      status: 500,
    });
  }
};

// DELETE request to delete a user
export const DELETE = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "Cannot find user Id" }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid user Id" }), {
        status: 400,
      });
    }

    await connect();

    const deletedUsers = await Recruiter.findByIdAndDelete(
      new Types.ObjectId(userId)
    );

    if (!deletedUsers) {
      return new NextResponse(
        JSON.stringify({
          message: "Error while deleting user. Recruiter not found.",
        }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "user is deleted", user: deletedUsers }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in deleting recruiters " + error.message, {
      status: 500,
    });
  }
};
