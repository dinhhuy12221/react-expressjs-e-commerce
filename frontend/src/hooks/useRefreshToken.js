import { useLocation, useNavigate } from "react-router-dom";
import axios from "../components/Client/api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const refresh = async () => {
    try {
      const response = await axios.get("/auth/customer/refresh", {
        withCredentials: true,
      });
      setAuth(prev => {
        // console.log(JSON.stringify(prev));
        // console.log(response.data);
        return { 
          ...prev,
          accessToken: response.data.accessToken 
        };
      });
      // return response?.data?.accessToken;
    } catch (error) {
      navigate("/", { state: { from: location }, replace: true });
    }
  };
  return refresh;
};

export default useRefreshToken;
