import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import routes from "./routes";

// import { MyContext } from "../../App";

const AdminContext = createContext();

function Admin() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [themeMode, setThemeMode] = useState(false);
  // const context = useContext(MyContext)

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   context.setIsHeaderFooterShow(false);
  // }, [])

  const openNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
    windowWidth,
    setWindowWidth,
    openNav,
    isOpenNav,
    setIsOpenNav,
  };

  useEffect(() => {}, [isToggleSidebar]);

  return (
      <AdminContext.Provider value={values}>
        <div className="main d-flex">
          {isHideSidebarAndHeader === false && <Header />}
          {isHideSidebarAndHeader === false && (
            <>
              <div
                className={`sidebarOverlay d-none ${
                  isOpenNav === true && "show"
                }`}
                onClick={() => setIsOpenNav(!isOpenNav)}
              ></div>
              <div
                className={`sidebarWrapper ${
                  isToggleSidebar === true ? "toggle" : ""
                } ${isOpenNav === true ? "open" : ""}`}
              >
                <Sidebar />
              </div>
            </>
          )}

          <div
            className={`content ${isHideSidebarAndHeader === true && "full"} ${
              isToggleSidebar === true ? "toggle" : ""
            }
             `}
          >
            <Routes>
              {routes &&
                routes.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      element={route.element}
                    />
                  );
                })}
            </Routes>
          </div>
        </div>
      </AdminContext.Provider>
  );
}

export default Admin;
export { AdminContext };
