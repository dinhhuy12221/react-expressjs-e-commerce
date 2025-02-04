import Order from '../models/order.js'

class orderController {
    createOrder = async(req, res) => {
        try {
            const order = new Order({
                customer_id: req.body.customer_id,
                product_id: req.body.product_id,
                number_of_product: req.body.number_of_product,
                total: req.body.total,
            })

            const result = await order.save();

            if (result) {
                return res.status(200).json({ message: "Add order successfully" })
            }
            return res.status(404).json({
                message: 'failed',
            })
        } catch (error) {
            console.log(error);
            
        }
    }

    getOrderByCustomer = async(req, res) => {
        try {
            const order = await Order.find({
                customer_id: req.params.id,
            })

            if (order) {
                return res.status(200).json(order)
            }
            return res.status(400).json({
                message: 'failed'
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}


export default new orderController();