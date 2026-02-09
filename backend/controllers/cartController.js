import Cart from '../models/cart.js'

class cartController {
    createCart = async(req, res) => {
        try {
            const cart = new Cart({
                customer_id: req.body.customer_id,
                product_id: req.body.product_id,
                product_count: req.body.product_count,
            })

            const result = await cart.save();

            if (result) {
                return res.status(200).json({ message: "Add cart successfully" })
            }
            return res.status(404).json({
                message: 'failed',
            })
        } catch (error) {
            console.log(error);
        }
    }

    getCartByCustomer = async(req, res) => {
        try {
            const cart = await Cart.find({
                customer_id: req.params.id,
            })

            if (cart) {
                return res.status(200).json(cart)
            }
            return res.status(400).json({
                message: 'failed'
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new cartController();