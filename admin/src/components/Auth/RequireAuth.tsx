import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { verify } from "../../api/user";

const RequireAuth = () => {
  const location = useLocation();

  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await verify();
        setAllowed(true);
      } catch (error) {
        setAllowed(false);
      }
    };

    checkAuth();
  }, [verify]);

  if (allowed === false) {
    return <div>Checking authentication...</div>;
  }

  return allowed ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
