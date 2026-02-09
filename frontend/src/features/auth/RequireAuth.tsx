import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useVerifyMutation } from "./authApi";
import { logOut } from "./authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const RequireAuth = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [verify, { isLoading }] = useVerifyMutation();
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await verify(null).unwrap();
        setAllowed(true);
      } catch (error) {
        dispatch(logOut());
        setAllowed(false);
      }
    };

    checkAuth();
  }, [verify, dispatch]);

  if (isLoading || allowed === null) {
    return <div>Checking authentication...</div>;
  }

  return allowed ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
