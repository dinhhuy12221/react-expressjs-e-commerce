import { useCreateCartMutation } from '~/features/cart/cartApi'

const useCreateCartHandler = () => {
    const [createCart, mutationState] = useCreateCartMutation();

    const handleCreateCart = async (customerId: number, productId: number, productCount: number) => {
        const payload = {
            customerId,
            productId,
            productCount,
        };
        await createCart(payload).unwrap()
    }

    return {
        handleCreateCart,
        ...mutationState
    }
}

export default useCreateCartHandler
