import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const Schema = mongoose.Schema;

const customerAccountSchema = Schema(
  {
    _id: {
      type: Number,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  {
    _id: false,
    timestamp: true,
  }
);

customerAccountSchema.plugin(AutoIncrement, { id: "customer_account_counter" });

customerAccountSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("CustomerAccount", customerAccountSchema);
