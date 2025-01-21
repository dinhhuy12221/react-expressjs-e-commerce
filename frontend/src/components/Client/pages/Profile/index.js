import { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./index.css";
import { isMuiElement } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";

function Profile() {
  const [user, setUser] = useState()
  const { auth } = useAuth();

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getUser = async () => {
  //     try {
  //       const response = await axios.get('/user/', {
  //         signal: controller.signal
  //       });
  //       console.log(response.data);
  //       isMounted && setUser(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     getUser();

  //     return () => {
  //       isMounted = false;
  //       controller.abort();
  //     }
  //   }
  // }, [])

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
          <div className="username">{auth.username}</div>
          <div className="description">Description</div>
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
