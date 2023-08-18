import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// it will create a collection called "Topic" in the database
// if it's not there already (the first part checks if it already exists)
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
