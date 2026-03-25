import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import "./responsive.css";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import routes from "./routes";
import Loading from "./components/Loading";
import RequireAuth from "./components/Auth/RequireAuth";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

const AdminContext = createContext<any>(null);

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [isToggleSidebar, setIsToggleSidebar] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [isLayoutVisible, setIsLayoutVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    const ok = locList.some((item) => item === location.pathname);
    console.log("ok", !ok);
    
    setIsLayoutVisible(!ok);
  }, [location]);

  const openNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  const values = {
    user,
    setUser,
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isLayoutVisible,
    setIsLayoutVisible,
    themeMode,
    setThemeMode,
    windowWidth,
    setWindowWidth,
    openNav,
    isOpenNav,
    setIsOpenNav,
    isLoading,
    setIsLoading,
  };

  console.log("user", user);

  useEffect(() => {}, [isToggleSidebar]);

  return (
    <AdminContext.Provider value={values}>
      {isLayoutVisible && <Header />}

      <div className="content">
        {isLayoutVisible && <Sidebar />}

        {isLoading && <Loading />}

        <div className="content-main">
          <Routes>
            <Route element={<RequireAuth />}>
              {routes.map((route, index) => (
                <Route
                  key={route.path || index}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
            <Route path={"/login"} element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />
          </Routes>
        </div>
      </div>
    </AdminContext.Provider>
  );
};

export default App;
export { AdminContext };
