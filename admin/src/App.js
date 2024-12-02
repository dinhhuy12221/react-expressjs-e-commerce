import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(false);

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
  };

  useEffect(() => {}, [isToggleSidebar]);

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <div className="main d-flex">
            {isHideSidebarAndHeader === false && <Header />}
            {isHideSidebarAndHeader === false && (
              <div
                className={`sidebarWrapper ${
                  isToggleSidebar === true ? "toggle" : ""
                }`}
              >
                <Sidebar />
              </div>
            )}

            <div
              className={`content ${
                isHideSidebarAndHeader === true && "full"
              } ${isToggleSidebar === true ? "toggle" : ""}`}
            >
              <Routes>
                <Route path={"/"} element={<Dashboard />} />
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/signup"} element={<SignUp />} />
                <Route path={"/products"} element={<Products />} />
                <Route
                  path={"/products/details"}
                  element={<ProductDetails />}
                />
              </Routes>
            </div>
          </div>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };
