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

const RequireAuth = () => {
  // const token = useSelector(selectCurrentToken);
  const [verify, { isLoading }] = useVerifyMutation();
  const [allowed, setAllowed] = useState(false);
  const location = useLocation();

  const isVerified = async () => {
    try {
      const result = await verify({}).unwrap();

      if (result?.status === 200) return true;
      else return false;
    } catch (error) {
      console.error(error);
    }
  };

  useMemo(() => {
    if (isVerified()) {
      setAllowed(true);
    } else {
      setAllowed(false);
    }
  }, []);

  return (
    <>
      {allowed ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
