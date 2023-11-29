import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  isRented: { type: Boolean, default: false },
  imgURL: String,
  code: String,
  dateRented: { type: Date, default: null },
  renter: { type: String, default: null },
  dateCreated: { type: Date, default: Date.now },
});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
