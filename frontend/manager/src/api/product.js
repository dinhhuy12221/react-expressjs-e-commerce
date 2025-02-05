import BASE_URL from ".";

const getProductList = async () => {
  try {
    const productList = await fetch(BASE_URL + "/product").then((result) =>
      result.json()
    );
    return productList;
  } catch (error) {
    console.error(error);
  }
}
const getProductById = async (id) => {
  try {
    const productList = await fetch(BASE_URL + "/product/" + id).then((result) =>
      result.json()
    );
    return productList;
  } catch (error) {
    console.error(error);
  }
};
const createProduct = async (values) => {
  try {
    const productList = await fetch(BASE_URL + "/product/" + id).then((result) =>
      result.json()
    );
    return productList;
  } catch (error) {
    console.error(error);
  }
};
