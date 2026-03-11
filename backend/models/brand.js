import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";
import Inc from "mongoose-sequence";
import slug from "mongoose-slug-updater";

const AutoIncrement = Inc(mongoose);
mongoose.plugin(slug);

const brandSchema = mongoose.Schema(
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

brandSchema.plugin(AutoIncrement, { id: "brand_id_counter" });
brandSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("Brand", brandSchema);
