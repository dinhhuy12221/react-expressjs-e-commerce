import { useCreateOrderMutation } from "~/features/orders/ordersApi"

type product = {
  id: number,
  count: number,
}

const useCreateOrderHandler = () => {
  const [createOrder, mutationState] = useCreateOrderMutation();

  const handleCreateOrder = async (customerId: number, products: Array<product>, location: string, delivery: number) => {
    const payload = {
      customerId,
      products,
      location,
      delivery,
    }
    await createOrder(payload).unwrap();
  }

  return { handleCreateOrder, ...mutationState };
}

export default useCreateOrderHandler
