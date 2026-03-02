import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'
import Inc from 'mongoose-sequence'

const AutoIncrement = Inc(mongoose)

const Schema = mongoose.Schema

const orderModel = new Schema({
    _id: {
        type: Number,
    },
    customerId: {
        type: Schema.Types.Int32,
        ref: 'Customer',
    },
    products: [
        {
            id: {
                type: Schema.Types.Int32,
                ref: "Product",
                required: true,
            },
            count: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            discount: {
                type: Number,
                required: true,
            },
            finalPrice: {
                type: Number,
                required: true,
            },
        }
    ],
    location: {
        type: String,
        require: true,
    },
    delivery: {
        type: Number,
        require: true,
    },
    orderedAt: {
        type: Date,
        require: true,
    },
    deliveredAt: {
        type: Date,
        require: true,
    },
    totalPrice: {
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
