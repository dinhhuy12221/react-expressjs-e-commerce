import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);

const Schema = mongoose.Schema;

const userSchema = Schema(
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
      required: true,
      default: ""
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


userSchema.plugin(AutoIncrement, { id: "user_id_counter" });

userSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("User", userSchema);