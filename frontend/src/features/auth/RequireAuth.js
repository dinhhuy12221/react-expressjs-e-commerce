// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../../../../hooks/useAuth";
// import jwt_decode from 'jwt-decode'

// const RequireAuth = ({ }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   const decoded = auth?.accessToken
//     ? jwt_decode(auth.accessToken)
//     : undefined;

//   return auth?.accessToken ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// export default RequireAuth;

import { useLocation, Navigate, Outlet } from "react-router";
import { useVerifyMutation } from "./authApi";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentAccessToken } from "./authSlice";

const RequireAuth = () => {
  const location = useLocation();
  const accessToken = useSelector(selectCurrentAccessToken);
  const [verify, { isLoading }] = useVerifyMutation();
  const [allowed, setAllowed] = useState(false);

  const isVerified = async () => {
    try {
      const result = await verify({}).unwrap();
      
      if (result?.status === 200) return true;
      return false;
    } catch (error) {
      return false;      
    }
  };

  useMemo(() => {
    isVerified() ? setAllowed(true) : setAllowed(false);
  }, [location]);

  console.log(allowed, accessToken);
  // console.log(window.location.href);
  
  return (
    <>
      {(allowed && accessToken !== null) ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
