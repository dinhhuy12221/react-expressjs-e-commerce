import BASE_URL from ".";

const verify = async () => {
    try {
        const result = await fetch(`${BASE_URL}/auth/verify`, {
            method: "POST",
            body: {}
        })

        return result
    } catch (error) {
        console.log(error);
    }
}

export { verify }