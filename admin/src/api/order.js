import BASE_URL from "."

const getOrders = async () => {
    try {
        const result = await fetch(`${BASE_URL}/order`).then((result) => result.json())
        return result
    } catch (error) {
        console.log(error);
    }
}

export { getOrders }