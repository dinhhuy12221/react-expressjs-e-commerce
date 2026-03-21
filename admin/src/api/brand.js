import BASE_URL from ".";

const getBrands = async () => {
  try {
    const result = await fetch(`${BASE_URL}/brand`).then((result) =>
      result.json()
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
const createBrand = async (values) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
const updateBrand = async (values, id) => {
  try {
    const result = await fetch(`${BASE_URL}/brand/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: values }),
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
export { getBrands, createBrand, updateBrand };
