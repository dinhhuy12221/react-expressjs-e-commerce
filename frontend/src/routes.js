import Home from "./components/Client/pages/Home";
import ProductDetails from "./components/Client/pages/ProductDetails";
import Cart from "./components/Client/pages/Cart";
import Login from "./components/Client/pages/Login";
import Category from "./components/Client/pages/Category";
import Register from "./components/Client/pages/Register";
import Profile from "./components/Client/pages/Profile";
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
        path: '/login',
        exact: true,
        element: <Login />,
    }, 
    {
        path: '/register',
        exact: true,
        element: <Register />,
    }, 

    // Private routes
    {
        path: '/profile',
        exact: true,
        element: <Profile />,
    }, 
    {
        path: '/cart',
        exact: true,
        element: <Cart />,
    }, 

    // Catch all
    {
        path: '*',
        exact: true,
        element: <div>404 Error. No Page Found</div>,
    },
]

export default routes;