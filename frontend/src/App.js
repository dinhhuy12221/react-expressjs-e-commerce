import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Client/components/Header/index.js";
import Footer from "./components/Client/components/Footer/index.js";
import ProductModal from "./components/Client/components/ProductModal/index.js";
import axios from "axios";
import ScrollToTop from "./components/Client/utils/ScrollToTop/index.js";
import { AuthProvider } from "./context/AuthProvider.js";
import RequireAuth from "./components/Client/components/RequireAuth/index.js";
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
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
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
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin,
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <MyContext.Provider value={values}>
          {isHeaderFooterShow === true && <Header />}
          <Routes>
            {/* {routes &&
              routes.map((route, index) => {
                if (route.path === "/profile") {
                  return (
                    <Route element={<RequireAuth />}>
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={route.element}
                      ></Route>
                    </Route>
                  );
                } else {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      element={route.element}
                    ></Route>
                  );
                }
              }
              )} */}
            <Route path="/" element={<Home />} exact={true} />
            <Route path="/cat/:id" element={<Category />} exact={true} />
            <Route
              path="/product/:slug"
              element={<ProductDetails />}
              exact={true}
            />
            <Route path="/login" element={<Login />} exact={true} />
            <Route path="/register" element={<Register />} exact={true} />
            <Route element={<RequireAuth />}>
              <Route path="/profile" element={<Profile />} exact={true} />
              <Route path="/cart" element={<Cart />} exact={true} />
            </Route>
            <Route
              path="/*"
              element={<div>404 Error. No Page Found</div>}
              exact={true}
            />
          </Routes>
          {isHeaderFooterShow === true && <Footer />}
          {isOpenProductModal === true && <ProductModal />}
        </MyContext.Provider>
        <ScrollToTop />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
