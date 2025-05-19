import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import ProductUpload from "./pages/ProductUpload";
import CategoryView from "./pages/CategoryView";

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
    path: "/product/view",
    exact: true,
    element: <ProductView />,
  },
  {
    path: "/categories",
    exact: true,
    element: <CategoryView />,
  },
];

export default routes;
