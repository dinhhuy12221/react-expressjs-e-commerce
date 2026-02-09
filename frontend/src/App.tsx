// import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import React from "react";
import { createContext, Suspense, useEffect, useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Modal from "./components/Product/Modal";
import axios from "axios";
import ScrollToTop from "./utils/ScrollToTop";
import RequireAuth from "./features/auth/RequireAuth";
// import PersistLogin from "./components/PersistLogin/index.jsx";
// import Home from "./pages/Home/index.jsx";
// import Category from "./pages/Category/index.jsx";
// import ProductDetails from "./pages/ProductDetails/index.jsx";
// import Login from "./pages/Login/index.jsx";
// import Register from "./pages/Register/index.jsx";
// import Cart from "./pages/Cart/index.jsx";
// import Profile from "./pages/Profile/index.jsx";
// import Account from "./pages/Profile/components/Account/index.jsx";
// import Orders from "./pages/Profile/components/Orders/index.jsx";
// import Reviews from "./pages/Profile/components/Reviews/index.jsx";
// import Settings from "./pages/Profile/components/Settings/index.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { lazyLoad } from "./utils/lazyLoad.js";

const MyContext = createContext(null);

const Home = lazyLoad("pages/Home/index.tsx");
const Category = lazyLoad("pages/Category/index.tsx");
const ProductDetails = lazyLoad("pages/Product/index.tsx");
const Login = lazyLoad("pages/Login/index.tsx");
const Signup = lazyLoad("pages/Signup/index.tsx");
const Cart = lazyLoad("pages/Cart/index.tsx");
const Profile = lazyLoad("pages/Profile/index.tsx");
const Information = lazyLoad("pages/profile/Information/index.tsx");
const Orders = lazyLoad("pages/profile/Orders/index.tsx");
const Reviews = lazyLoad("pages/profile/Reviews/index.tsx");
const Settings = lazyLoad("pages/profile/Settings/index.tsx");

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [productModal, setProductModal] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    await axios.get(url).then((res) => setCountryList(res.data.data));
  };

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    productModal,
    setProductModal,
    isLogin,
    setIsLogin,
  };

  return (
      <>
        <MyContext.Provider value={values}>
          <Routes>
            <Route path="/" element={<Wrapper />}>
              {/* Pulic Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<Category />} />
              <Route
                path="/product/:slug"
                element={<ProductDetails />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
  
              {/* Protected Routes */}
              {/* <Route element={<PersistLogin />}> */}
              <Route element={<RequireAuth />}>
                <Route path="/profile" element={<Profile />}>
                  <Route path="information" element={<Information />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
              </Route>
              {/* </Route> */}
  
              {/* Catch All */}
              <Route
                path="/*"
                element={
                  <>
                    <div>404 Error. No Page Found</div>
                  </>
                }
              />
            </Route>
          </Routes>
          {isOpenProductModal === true && <Modal />}
        </MyContext.Provider>
        <ScrollToTop />
      </>
  );
}

function Wrapper() {
  const { pathname } = useLocation();
  const list = ["/login", "/signup"];
  const isVisible = !list.some(p => pathname.toLowerCase().startsWith(p))
  
  return (
    <>
      {isVisible && <Header />}
      <Suspense>
        <Outlet />
      </Suspense>
      {isVisible && <Footer />}
    </>
  );
}

export default App;
export { MyContext };
