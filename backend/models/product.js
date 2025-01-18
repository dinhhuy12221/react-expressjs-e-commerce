import mongoose from "mongoose";
import slug from "mongoose-slug-updater";
import mongooseDelete from "mongoose-delete";
import Inc from "mongoose-sequence";
// const mongoose = require("mongoose");
// const slug = require("mongoose-slug-updater");
// const mongooseDelete = require("mongoose-delete");
// const AutoIncrement = require("mongoose-sequence")(mongoose);

const AutoIncrement = Inc(mongoose);
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    _id: {
      type: Number,
    },
    name: {
      type: String,
      default: "",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
    brand: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.Int32,
      ref: "Category",
      required: false,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    categoryId: {
      type: Schema.Types.Int32,
      ref: "Category",
    },
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
  },
  {
    _id: false,
    timestamp: true,
  }
);

productSchema.plugin(AutoIncrement, { id: "product_id_counter" });

productSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("Product", productSchema);
