import BASE_URL from "."

const getBrands = async () => {
    try {
        const result = await fetch(`${BASE_URL}/api/brand`).then((result) => result.data);
    return result
    } catch (error) {
        console.log(error);
        
    }
}

export { getBrands };