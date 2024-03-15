const { Schema, models, model } = require("mongoose");

const OrderSchema = new Schema({
  line_items: Object,
  name: String,
  email: String,
  phone: String,
  city: String,
  address: String,
  postal: Number,
  floor: Number,
  door: Number,
  paid: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

export const Order = models.Order || model("Order", OrderSchema);
