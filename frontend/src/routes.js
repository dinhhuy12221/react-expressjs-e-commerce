import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
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