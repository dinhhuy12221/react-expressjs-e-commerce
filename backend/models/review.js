import mongoose, { Schema } from "mongoose";
import mongooseDelete from "mongoose-delete";
import Inc from "mongoose-sequence";

const AutoIncrement = Inc(mongoose);

const brandSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    customerId: {
      type: Schema.Types.Int32,
      ref: "Customer",
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
    timestamps: true,
  }
);

brandSchema.plugin(AutoIncrement, { id: "review_id_counter" });
brandSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("Review", brandSchema);
