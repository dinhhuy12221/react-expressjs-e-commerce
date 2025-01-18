import Home from "./components/Client/pages/Home";
import ProductDetails from "./components/Client/pages/ProductDetails";
import Cart from "./components/Client/pages/Cart";
import SignIn from "./components/Client/pages/SignIn";
import SignUp from "./components/Client/pages/SignUp";
import Category from "./components/Client/pages/Category";
import Admin from './components/Admin'
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
    {
        path: '/admin',
        exact: true,
        element: <Admin />,
    }, 
]

export default routes;