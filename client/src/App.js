import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import SignUp from "./pages/SignUp";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios
      .get(url)
      .then((res) => setCountryList(res.data.data));
  };

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/cat/:id" exact={true} element={<Listing />}></Route>
          <Route
            path="/product/:id"
            exact={true}
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" exact={true} element={<Cart />}></Route>
          <Route path="/signIn" exact={true} element={<SignIn />}></Route>
          <Route path="/signUp" exact={true} element={<SignUp />}></Route>
        </Routes>
        {isHeaderFooterShow === true && <Footer />}
        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
