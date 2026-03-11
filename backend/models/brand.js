import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";
import Inc from "mongoose-sequence";
import slug from "mongoose-slug-updater"

const AutoIncrement = mongoose(Inc)
mongoose.plugin(slug)

const brandSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
}, {
    _id: false,
    timestamps: true,
})

brandSchema.plugin(AutoIncrement, { id: "brand_id_counter" })
brandSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: "all",
})

export default mongoose.model("Brand", brandSchema)