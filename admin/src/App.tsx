import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import "./responsive.css";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import routes from "./routes";

const AdminContext = createContext<any>(null);

const App = () => {
  const [isToggleSidebar, setIsToggleSidebar] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [themeMode, setThemeMode] = useState(false);
  const location = useLocation();
  const locList = ["/login", "/signup"];

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

  useEffect(() => {
    const ok = locList.some(item => item.endsWith(location.pathname))
    setIsHideSidebarAndHeader(!ok);
  }, [location])

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
       {isHideSidebarAndHeader && <Header />}
      <div className="content">
        {isHideSidebarAndHeader && <Sidebar />}
        {/* <div
          className={`sidebar-content ${
            isHideSidebarAndHeader === true && "full"
          } ${isToggleSidebar === true ? "toggle" : ""}`}
        > */}
            <div className="content-main">
          <Routes>
            {routes &&
              routes.map((route, index) => {
                return (
                    <Route
                      path={route.path}
                      element={route.element}
                    />
                  );
                })}
          </Routes>
                </div>
      </div>
      {/* </div> */}
    </AdminContext.Provider>
  );
};

export default App;
export { AdminContext };
