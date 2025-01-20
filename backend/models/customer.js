import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const Schema = mongoose.Schema;

const customerSchema = Schema(
  {
    _id: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
    timestamp: true,
  }
);

customerSchema.plugin(AutoIncrement, { id: "customer_id_counter" });

customerSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("Customer", customerSchema);
