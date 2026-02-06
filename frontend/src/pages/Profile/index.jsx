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
    <section className="profile-page">
      <div className="profile-page-sidebar">
        <ProfileSidebar />
      </div>
      <div className="profile-page-content">
        <Outlet />
      </div>
    </section>
  );
}

export default Profile;
