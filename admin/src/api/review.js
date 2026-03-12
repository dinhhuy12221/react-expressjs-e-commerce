import BASE_URL from ".";

const getReviewByCustomerId = async (id) => {
  try {
    const reviews = await fetch(`${BASE_URL}/review/customer/${id}`)
      .then((result) => result.json())
      .then((result) => result.data);

    return reviews;
  } catch (error) {
    console.log(error);
  }
};
const getReviewByProductId = async (id) => {
  try {
    const reviews = await fetch(`${BASE_URL}/review/product/${id}`)
      .then((result) => result.json())
      .then((result) => result.data);

    return reviews;
  } catch (error) {
    console.log(error);
  }
};

export { getReviewByCustomerId, getReviewByProductId };
