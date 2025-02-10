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

import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useVerifyMutation } from "./authApi";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import { useEffect, useState } from "react";

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const [verify, { isLoading }] = useVerifyMutation();
  const dispatch = useDispatch();
  const location = useLocation();
  const [result, setResult] = useState(false);

  const doVerify = async () => {
    try {
      const result = await verify({}).unwrap();
      console.log(result);

      if (result) setResult(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    doVerify();
  }, []);

  return result ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
