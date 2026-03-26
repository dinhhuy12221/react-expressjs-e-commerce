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
        default: ""
      },
      public_id: {
        type: String,
        default: ""
      },
    },
    fullname: {
      type: String,
      default: () => {
        return `User_${this._id}`;
      },
    },
    phone_number: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
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
