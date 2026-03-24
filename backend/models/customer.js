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
    username: {
      type: String,
      required: true,
    },
    image: {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
    fullname: {
      type: String,
      default: () => {
        return `Customer_${this._id}`;
      },
    },
    phone_number: {
      type: Number,
      default: ""
    },
    address: {
      type: String,
      default: ""
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
