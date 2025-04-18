import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 120,
  },
});

export const User = models.User || model("User", UserSchema);