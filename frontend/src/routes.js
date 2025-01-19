import Home from "./components/Client/pages/Home";
import ProductDetails from "./components/Client/pages/ProductDetails";
import Cart from "./components/Client/pages/Cart";
import SignIn from "./components/Client/pages/SignIn";
import Category from "./components/Client/pages/Category";
import Admin from './components/Admin'
import Register from "./components/Client/pages/Register";
const routes = [
    // Public routes
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
        path: '/register',
        exact: true,
        element: <Register />,
    }, 

    // Private routes
    {
        path: '/admin',
        exact: true,
        element: <Admin />,
    }, 

    // Catch all
    {
        path: '*',
        exact: true,
        element: <></>,
    },
]

export default routes;