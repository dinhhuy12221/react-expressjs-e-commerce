import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'
import Inc from 'mongoose-sequence'

const AutoIncrement = Inc(mongoose)

const Schema = mongoose.Schema

const orderModel = new Schema({
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
    number_of_product: {
        type: Number,
        require: true
    },
    total: {
        type: Number,
        require: true,
    },
}, {
    _id: false,
    timestamps: true,
})

orderModel.plugin(AutoIncrement, {
    id: 'order_id_counter',
})

orderModel.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("Order", orderModel);
