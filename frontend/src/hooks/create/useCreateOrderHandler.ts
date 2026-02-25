import { useCreateOrderMutation } from "~/features/orders/ordersApi"
const useCreateOrderHandler = () => {
  const [createOrder, mutationState] = useCreateOrderMutation();

  const handleCreateOrder = () => {
    
  }
}

export default useCreateOrderHandler
