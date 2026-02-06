// import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { createContext, Suspense, useEffect, useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Modal from "./components/Product/Modal";
import axios from "axios";
import ScrollToTop from "./utils/ScrollToTop/index.jsx";
import RequireAuth from "./features/auth/RequireAuth.jsx";
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
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { lazyLoad } from "./utils/lazyLoad.js";

const MyContext = createContext();

const Home = lazyLoad("pages/Home/index.jsx");
const Category = lazyLoad("pages/Category/index.jsx");
const ProductDetails = lazyLoad("pages/Product/index.jsx");
const Login = lazyLoad("pages/Login/index.jsx");
const Signup = lazyLoad("pages/Signup/index.jsx");
const Cart = lazyLoad("pages/Cart/index.jsx");
const Profile = lazyLoad("pages/Profile/index.jsx");
const Information = lazyLoad("pages/profile/Information/index.jsx");
const Orders = lazyLoad("pages/profile/Orders/index.jsx");
const Reviews = lazyLoad("pages/profile/Reviews/index.jsx");
const Settings = lazyLoad("pages/profile/Settings/index.jsx");

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
                exact={true}
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
                exact={true}
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
