import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const routes = [
    {
        path: '/',
        exact: true,
        element: <Home />,
    }, 
    {
        path: '/cat/:id',
        exact: true,
        element: <Listing />,
    }, 
    {
        path: '/product/:id',
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