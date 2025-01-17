import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Category from "./pages/Category";

const routes = [
    {
        path: '/',
        exact: true,
        element: <Home />,
    }, 
    {
        path: '/cat/:id',
        exact: true,
        element: <Category />,
    }, 
    {
        path: '/product/:slug',
        exact: true,
        element: <ProductDetails />,
    }, 
    {
        path: '/cart',
        exact: true,
        element: <Cart />,
    }, 
    {
        path: '/signin',
        exact: true,
        element: <SignIn />,
    }, 
    {
        path: '/signup',
        exact: true,
        element: <SignUp />,
    }, 
]

export default routes;