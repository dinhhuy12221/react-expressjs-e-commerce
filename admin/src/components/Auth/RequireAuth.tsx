import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { verify } from "../../api/user";

const RequireAuth = () => {
  const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const success = await verify();
        if (success) setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [verify]);

  // if (isAuthenticated === false) {
  //   return <div>Checking authentication...</div>;
  // }

  console.log(isAuthenticated);
  

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
