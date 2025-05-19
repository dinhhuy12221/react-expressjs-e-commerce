import { useEffect, useState } from "react";
import "./index.css";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileSidebar from "./components/Sidebar";

function Profile() {
  const [info, setInfo] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    // const getInformation = async () => {
    //   try {
    //     const response = await axiosPrivate.get("/product", {
    //       signal: controller.signal,
    //     });
    //     isMounted && setInfo(response.data);
    //   } catch (error) {
    //     console.error(error);
    //     navigate("/login", { state: { from: location }, replace: true });
    //   }
    // };
    // getInformation();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <>
      <Header />
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <ProfileSidebar />
            </div>
            <div className="col-sm-9">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
