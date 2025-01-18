import { base_url } from ".";

const getProductList = async () => {
  try {
    const productList = await fetch(base_url + "/product").then((result) =>
      result.json()
    );
    return productList;
  } catch (error) {
    console.error(error);
  }
};

const getProductById = async (id) => {
  try {
    const product = await fetch(base_url + "/product/" + id).then((result) =>
      result.json()
    );
    return await product;
  } catch (error) {
    console.error(error);
  }
};

const getProductBySlug = async (slug) => {
  try {
    const product = await fetch(base_url + "/product/" + slug).then((result) =>
      result.json()
    );
    return await product;
  } catch (error) {
    console.error(error);
  }
};

export { getProductList, getProductById, getProductBySlug };
