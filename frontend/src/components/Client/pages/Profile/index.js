import { useEffect, useState } from "react";
import "./index.css";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import ProfileSidebar from "./components/Sidebar";

function Profile() {
  const [info, setInfo] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectCurrentUser);

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
      <div className="profile container-fluid">
        <div className="row">
          <div className="col-md-2">
            <ProfileSidebar />
          </div>
          <div className="col-md-10">
            <section className="info">
              <div className="avatar">
                {/* <img src={"https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/eula/image.png?strip=all&quality=75&w=256"} alt="avatar"/> */}
                <img
                  src={
                    "https://images.pexels.com/photos/2364633/pexels-photo-2364633.jpeg?cs=srgb&dl=pexels-hiwatalaei-2364633.jpg&fm=jpg"
                  }
                  alt="avatar"
                />
              </div>
              <div className="username">{user}</div>
              <div className="description"></div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
