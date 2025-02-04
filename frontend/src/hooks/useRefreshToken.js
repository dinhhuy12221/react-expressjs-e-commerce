import { useLocation, useNavigate } from "react-router-dom";
import axios from "../components/Client/api/axios";
// import useAuth from "./useAuth";

import { useDispatch } from "react-redux";
import { setCredentials } from "../components/Client/features/auth/authSlice";

const useRefreshToken = () => {
  // const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()

  const refresh = async () => {
    try {
      const response = await axios.get("/auth/customer/refresh", {
        withCredentials: true,
      });
      // setAuth(prev => {
      //   // console.log(JSON.stringify(prev));
      //   // console.log(response.data);
      //   return { 
      //     ...prev,
      //     accessToken: response.data.accessToken 
      //   };
      // });
      // return response?.data?.accessToken;
      // dispatch(setCredentials({ ...response }))
    } catch (error) {
      navigate("/", { state: { from: location }, replace: true });
    }
  };
  return refresh;
};

export default useRefreshToken;
