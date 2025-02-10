import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { createContext, useEffect, useState } from "react";
import ProductModal from "./components/ProductModal/index.js";
import axios from "axios";
import ScrollToTop from "./utils/ScrollToTop/index.js";
import RequireAuth from "./features/auth/RequireAuth.js";
import PersistLogin from "./components/PersistLogin/index.js";
import Home from "./pages/Home/index.js";
import Category from "./pages/Category/index.js";
import ProductDetails from "./pages/ProductDetails/index.js";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register/index.js";
import Cart from "./pages/Cart/index.js";
import Profile from "./pages/Profile/index.js";
import Account from "./pages/Profile/components/Account/index.js";
import Orders from "./pages/Profile/components/Orders/index.js";
import Reviews from "./pages/Profile/components/Reviews/index.js";
import Settings from "./pages/Profile/components/Settings/index.js";
const MyContext = createContext();

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
              <Route path="account" element={<Account />} index={true} />
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
            element={<div>404 Error. No Page Found</div>}
            exact={true}
          />
        </Routes>
        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
