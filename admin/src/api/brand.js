import BASE_URL from ".";

const getBrands = async () => {
  try {
    const result = await fetch(`${BASE_URL}/brand`)
      .then((result) => result.json())
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getBrands };
