import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import ProductUpload from "./pages/ProductUpload";
import Category from "./pages/CategoryBrand";
import Order from "./pages/Order";
import OrderDetail from "./pages/Order/OrderDetail";
import Profile from "./pages/Profile";

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
  // {
  //   path: "/login",
  //   exact: true,
  //   element: <Login />,
  // },
  // {
  //   path: "/signup",
  //   exact: true,
  //   element: <SignUp />,
  // },
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
    path: "/product",
    exact: true,
    element: <ProductView />,
  },
  {
    path: "/categories-brands",
    exact: true,
    element: <Category />,
  },
  {
    path: "/orders",
    exact: true,
    element: <Order />,
  },
  {
    path: "/orders/:id",
    exact: true,
    element: <OrderDetail />,
  },
  {
    path: "profile",
    exact: true,
    element: <Profile />,
  },
];

export default routes;
