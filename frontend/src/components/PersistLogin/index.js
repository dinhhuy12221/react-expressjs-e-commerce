import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken, setCredentials } from "../../features/auth/authSlice";
// import { useRefreshMutation } from "../../features/auth/authApi";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [refresh , { isLoading }] = useRefreshMutation();
  // const dispatch = useDispatch();
  // let token = useSelector(selectCurrentToken);

  useEffect(() => {
    let isMounted = true;

    const verityRefreshToken = async () => {
      try {
        console.log(123);

        // token = await refresh();
        // dispatch(setCredentials({token}))
      } catch (error) {
        console.error(error);
      } 
    };

    // !token ? verityRefreshToken() : setIsLoading(false);

    // !token && verityRefreshToken();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    // console.log(`accessToken: ${JSON.stringify(token)}`);
  }, [isLoading]);

  // return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;

  return <Outlet />
};

export default PersistLogin;
