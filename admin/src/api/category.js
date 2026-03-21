import BASE_URL from ".";

const getCategories = async () => {
    try {
        const categoryList = await fetch(`${BASE_URL}/category`);

        return await categoryList.json();
    } catch (error) {
        console.error(error);
    }
}
const updateCategory = async (values) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

export { getCategories }