import mongoose from "mongoose";
import slug from "mongoose-slug-updater";
import mongooseDelete from "mongoose-delete";
import Inc from "mongoose-sequence";

const AutoIncrement = Inc(mongoose);

// const mongoose = require("mongoose");
// const slug = require("mongoose-slug-updater");
// const mongooseDelete = require("mongoose-delete");
// const AutoIncrement = ("mongoose-sequence");

mongoose.plugin(slug);

const categorySchema = mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
  },
  {
    _id: false,
    timestamps: true,
  }
);

categorySchema.plugin(AutoIncrement, { id: "category_id_counter" });

categorySchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("Category", categorySchema);
