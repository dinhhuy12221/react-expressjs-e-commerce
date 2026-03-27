import BASE_URL from ".";

const getOrders = async () => {
  try {
    const result = await fetch(`${BASE_URL}/order/`, {
        credentials: "include"
    })
      .then((result) => result.json())
    return result;
  } catch (error) {
    console.log(error);
  }
};
const getOrderById = async (id) => {
  try {
    const result = await fetch(`${BASE_URL}/order/${id}`, {
        credentials: "include"
    })
      .then((result) => result.json())
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getOrders, getOrderById };
