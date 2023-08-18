import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  // it destructures the title and description
  const { title, description } = await request.json();

  await connectMongoDB();

  // it creates a new topic in the database
  await Topic.create({ title, description });

  return NextResponse.json(
    { message: "Topic created successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();

  // it gets all topics from the Topic collection in the database
  const topics = await Topic.find({});

  return NextResponse.json(topics);
}

export async function DELETE(request) {
  await connectMongoDB();

  // it gets the id from the request
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();

  // it deletes the topic with the given id
  await Topic.findByIdAndDelete(id);

  return NextResponse.json(
    { message: "Topic deleted successfully" },
    { status: 200 }
  );
}
