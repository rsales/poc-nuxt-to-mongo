import { connectDB } from "../utils/mongoose";
import { User } from "../models/user";

export default defineEventHandler(async (event) => {
  // Connect to the database
  await connectDB();

  // Verify the HTTP method
  if (event.node.req.method === "GET") {
    // Returny all users
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to fetch users",
        data: error,
      });
    }
  }

  if (event.node.req.method === "POST") {
    // Readyng the request body
    const { name, email, age } = await readBody(event);

    // Validate the fields
    if (!name || !email) {
      throw createError({
        statusCode: 400,
        statusMessage: "Name and email are required",
      });
    }

    // Create a new user
    const user = new User({ name, email, age });

    try {
      await user.save();
      return { message: "User created successfully", user };
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to create user",
        data: error,
      });
    }
  }

  // If mehod not are GET or POST, return 405 error
  throw createError({
    statusCode: 405,
    statusMessage: "HTTP method is not allowed.",
  });
});