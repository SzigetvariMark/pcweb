import mongoose, { Schema, model, models } from "mongoose";

const DeliverySchema = new Schema(
  {
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
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Delivery = models.Delivery || model("Delivery", DeliverySchema);
