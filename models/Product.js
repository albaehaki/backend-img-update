import mongoose from "mongoose";

const Product = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

export default mongoose.model("Products", Product);
