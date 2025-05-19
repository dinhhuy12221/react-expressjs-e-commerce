const getCategoryList = async () => {
    try {
        const categoryList = await fetch('http://localhost:4002/api/category');

        return await categoryList.json();
    } catch (error) {
        console.error(error);
    }
}

export { getCategoryList }