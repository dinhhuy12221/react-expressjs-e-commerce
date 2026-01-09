import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { createContext, Suspense, useEffect, useState } from "react";
import ProductModal from "./components/ProductModal/index.js";
import axios from "axios";
import ScrollToTop from "./utils/ScrollToTop/index.js";
import RequireAuth from "./features/auth/RequireAuth.js";
// import PersistLogin from "./components/PersistLogin/index.js";
// import Home from "./pages/Home/index.js";
// import Category from "./pages/Category/index.js";
// import ProductDetails from "./pages/ProductDetails/index.js";
// import Login from "./pages/Login/index.js";
// import Register from "./pages/Register/index.js";
// import Cart from "./pages/Cart/index.js";
// import Profile from "./pages/Profile/index.js";
// import Account from "./pages/Profile/components/Account/index.js";
// import Orders from "./pages/Profile/components/Orders/index.js";
// import Reviews from "./pages/Profile/components/Reviews/index.js";
// import Settings from "./pages/Profile/components/Settings/index.js";
// import Header from "./components/Header/index.js";
// import Footer from "./components/Footer/index.js";
import { lazyLoad } from "./utils/lazyLoad.js";

const MyContext = createContext();

const Home = lazyLoad("./pages/Home/index.js");
const Category = lazyLoad("./pages/Category/index.js");
const ProductDetails = lazyLoad("./pages/ProductDetails/index.js");
const Login = lazyLoad("./pages/Login/index.js");
const Register = lazyLoad("./pages/Register/index.js");
const Cart = lazyLoad("./pages/Cart/index.js");
const Profile = lazyLoad("./pages/Profile/index.js");
const Account = lazyLoad("./pages/Account/index.js");
const Orders = lazyLoad("./pages/Orders/index.js");
const Reviews = lazyLoad("./pages/Reviews/index.js");
const Settings = lazyLoad("./pages/Settings/index.js");
const Header = lazyLoad("./components/Header/index.js");
const Footer = lazyLoad("./components/Footer/index.js");

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
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
    isLogin,
    setIsLogin,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Routes>
          {/* Pulic Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<Category />} />
          <Route
            path="/product/:slug"
            element={<ProductDetails />}
            exact={true}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          {/* <Route element={<PersistLogin />}> */}
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="info" element={<Account />} index={true} />
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
                <Header />
                <div>404 Error. No Page Found</div>
                <Footer />
              </>
            }
            exact={true}
          />
        </Routes>
        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
      <ScrollToTop />
    </BrowserRouter>
  );
}

function Wrapper() {
  return (
    <>
      <Suspense>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
export { MyContext };
