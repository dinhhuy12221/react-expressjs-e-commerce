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
};
const getProductById = async (id) => {
  try {
    const product = await fetch(BASE_URL + "/product/" + id).then((result) =>
      result.json()
    );
    return product;
  } catch (error) {
    console.error(error);
  }
};
const getProductBySlug = async (slug) => {
  try {
    const product = await fetch(BASE_URL + "/product/" + slug).then((result) =>
      result.json()
    );
    return product;
  } catch (error) {
    console.error(error);
  }
};
const createProduct = async (values) => {
  try {
    const productList = await fetch(BASE_URL + "/product/" + id).then(
      (result) => result.json()
    );
    return productList;
  } catch (error) {
    console.error(error);
  }
};
const updateProduct = async (values) => {
  try {
    const productList = await fetch(BASE_URL + "/product/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((result) => result.json());
    return productList;
  } catch (error) {
    console.error(error);
  }
};

export { getProductList, getProductById, getProductBySlug, createProduct, updateProduct };
