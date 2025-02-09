
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../features/auth/authSlice";
function Account() {
  const user = useSelector(selectCurrentUser);

  return (
    <div>
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
  );
}

export default Account;
