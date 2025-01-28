import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Client/components/Header/index.js";
import Footer from "./components/Client/components/Footer/index.js";
import ProductModal from "./components/Client/components/ProductModal/index.js";
import axios from "axios";
import ScrollToTop from "./components/Client/utils/ScrollToTop/index.js";
import RequireAuth from "./components/Client/features/auth/RequireAuth.js";
import PersistLogin from "./components/Client/components/PersistLogin/index.js";
import Home from "./components/Client/pages/Home/index.js";
import Category from "./components/Client/pages/Category/index.js";
import ProductDetails from "./components/Client/pages/ProductDetails/index.js";
import Login from "./components/Client/pages/Login/index.js";
import Register from "./components/Client/pages/Register/index.js";
import Cart from "./components/Client/pages/Cart/index.js";
import Profile from "./components/Client/pages/Profile/index.js";

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
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Route>

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
