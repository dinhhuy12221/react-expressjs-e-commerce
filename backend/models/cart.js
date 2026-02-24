import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'
import Inc from 'mongoose-sequence'

const AutoIncrement = Inc(mongoose)

const Schema = mongoose.Schema

const cartModel = new Schema({
    _id: {
        type: Number,
    },
    customerId: {
        type: Schema.Types.Int32,
        ref: 'Customer',
        require: true,
    },
    productId: {
        type: Schema.Types.Int32,
        ref: "Product",
        require: true,
    },
    productCount: {
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
