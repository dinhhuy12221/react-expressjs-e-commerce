import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ProductUpload from "./pages/ProductUpload";
import Category from "./pages/Category";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    exact: true,
    element: <Dashboard />,
  },
  {
    path: "/login",
    exact: true,
    element: <Login />,
  },
  {
    path: "/signup",
    exact: true,
    element: <SignUp />,
  },
  {
    path: "/products",
    exact: true,
    element: <Products />,
  },
  {
    path: "/product/upload",
    exact: true,
    element: <ProductUpload />,
  },
  {
    path: "/product/details",
    exact: true,
    element: <ProductDetails />,
  },
  {
    path: "/categories",
    exact: true,
    element: <Category />,
  },
];

export default routes;
