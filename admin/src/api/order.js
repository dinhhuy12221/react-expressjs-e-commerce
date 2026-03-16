import BASE_URL from "."

const getOrders = async () => {
    try {
        const result = await fetch(`${BASE_URL}/order/`).then((result) => result.json()).then((result) => result.data)
        return result
    } catch (error) {
        console.log(error);
    }
}
const getOrderById = async (id) => {
    try {
        const result = await fetch(`${BASE_URL}/order/${id}`).then((result) => result.json()).then((result) => result.data)
        return result
    } catch (error) {
        console.log(error);
    }
}

export { getOrders, getOrderById }