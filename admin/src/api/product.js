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
    console.log(values);
    
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      if (key !== "imagesFiles") {
        formData.append(key, values[key])
      }
    })

    values.imageFiles.map((item, index) => {
      formData.append(`image_file_${index}`, item || "")
    })

    const product = await fetch(BASE_URL + "/product/create", {
      method: "POST",
      body: formData,
    }).then(
      (result) => result.json()
    );
    return product;
  } catch (error) {
    console.error(error);
  }
};
const updateProduct = async (values) => {
  try {
    const formData = new FormData()
    
    Object.keys(values).forEach(key => {
      if (key !== "imageFiles" && key !== "images") {
        formData.append(key, values[key])
      }
    })
    formData.append("images", JSON.stringify(values["images"]))
    values.imageFiles.map((item, index) => {
      formData.append(`image_file_${index}`, item || "")
    })

    const productList = await fetch(BASE_URL + "/product/" + values._id, {
      method: "PUT",
      body: formData,
    }).then((result) => result.json());
    return productList;
  } catch (error) {
    console.error(error);
  }
};

export { getProductList, getProductById, getProductBySlug, createProduct, updateProduct };
