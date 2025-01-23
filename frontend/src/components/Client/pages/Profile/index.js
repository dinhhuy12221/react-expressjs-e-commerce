import { useEffect, useState } from "react";
import "./index.css";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

function Profile() {
  const [info, setInfo] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    
    const getInformation = async () => {
      try {

        const response = await axiosPrivate.get("/product", {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setInfo(response.data);
      } catch (error) {
        console.log(error);
        navigate("/login", { state: { from: location }, replace: true });
      }
    };
    getInformation();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="profile container">
      <div className="row">
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
          <div className="username"></div>
          <div className="description"></div>
        </section>
      </div>
      <section className="order">
        <div className="col">
          <h3>Orders</h3>
          <ul>
            <li>Toothbrush</li>
            <li>Toothbrush</li>
            <li>Toothbrush</li>
            <li>Toothbrush</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Profile;
