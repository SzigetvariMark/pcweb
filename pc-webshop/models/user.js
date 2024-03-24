import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists!"],
      required: [true, "Email is required!"],
    },
    username: {
      type: String,
      required: [true, "Username is required!"],
    },
    image: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    floor: {
      type: Number,
    },
    door: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
