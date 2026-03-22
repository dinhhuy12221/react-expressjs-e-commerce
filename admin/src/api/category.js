import BASE_URL from ".";

const getCategories = async () => {
  try {
    const categoryList = await fetch(`${BASE_URL}/category`);

    return await categoryList.json();
  } catch (error) {
    console.error(error);
  }
};
const createCategory = async (values) => {
  try {
    const result = await fetch(`${BASE_URL}/category/${create}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: values}),
    })
    return result.data
  } catch (error) {
    console.log(error);
  }
};
const updateCategory = async (values, id) => {
  try {
    const result = await fetch(`${BASE_URL}/category/${id}`, {
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
const deleteCategory = async (id) => {
  try {
    const result = await fetch(`${BASE_URL}/category/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getCategories, createCategory, updateCategory, deleteCategory };
