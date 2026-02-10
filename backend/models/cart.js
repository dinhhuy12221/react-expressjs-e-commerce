import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'
import Inc from 'mongoose-sequence'

const AutoIncrement = Inc(mongoose)

const Schema = mongoose.Schema

const cartModel = new Schema({
    _id: {
        type: Number,
    },
    customer_id: {
        type: Schema.Types.Int32,
        ref: 'Customer',
    },
    product_id: {
        type: Number,
        require: true,
    },
    product_count: {
        type: Number,
        require: true
    },
}, {
    _id: false,
    timestamps: true,
})

cartModel.plugin(AutoIncrement, {
    id: 'cart_id_counter',
})

cartModel.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("Cart", cartModel);
