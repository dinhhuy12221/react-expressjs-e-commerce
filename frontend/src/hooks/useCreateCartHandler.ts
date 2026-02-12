import { useCreateCartMutation } from '~/features/cart/cartApi'

const useCreateCartHandler = () => {
    const [createCart, mutationState] = useCreateCartMutation();

    const handleCreateCart = async (customer_id: number, product_id: number, product_count: number) => {
        const payload = {
            customer_id,
            product_id,
            product_count,
        };
        createCart(payload).unwrap()
    }

    return {
        handleCreateCart,
        ...mutationState
    }
}

export default useCreateCartHandler
