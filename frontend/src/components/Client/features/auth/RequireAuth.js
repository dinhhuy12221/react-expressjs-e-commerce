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

import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './authSlice'

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()

  return (
    token
      ? <Outlet />
      : <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default RequireAuth;