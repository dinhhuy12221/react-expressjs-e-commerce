import { base_url } from ".";

const getCategoryById = async (id) => {
  try {
    const category = await fetch(base_url + "/category/" + id).then((result) =>
      result.json()
    );
    return category;
  } catch (error) {
    console.error(error);
  }
};

export { getCategoryById };
