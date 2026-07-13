/* eslint-disable */
// First step in rest API after establishing api is working under /api/(auth)/users
// we created a database under mongodb and set up .env file with URI
import mongoose from "mongoose";

const URI = process.env.MONGODB_URI || process.env.MONGO_URI;

const connect = async () => {
  if (!URI) {
    console.warn("Mongo URI not configured. Skipping database connection.");
    return;
  }

  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    return;
  }

  if (connectionState === 2) {
    return;
  }

  try {
    await mongoose.connect(URI, {
      dbName: "my-portfolio-storage",
      bufferCommands: true,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.warn("Database connection failed:", message);
  }
};

export default connect;
