import axios from "../components/Client/api/axios";
import useAuth from "./useAuth";

function useLogout() {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({})
        try {
            const response = await axios('/auth/customer/logout', {
                withCredentials: true,
            })
        } catch (error) {
            console.error(error)
        }
    }
    return logout;
}

export default useLogout;