import { useSelector } from "react-redux";
import { selectCurrentUsername } from "../../../../features/auth/authSlice";

import "./index.css";
function Account() {
  const username = useSelector(selectCurrentUsername);

  const submitChange = (e) => {
    e.prevenDefault();
  }

  return (
    <div className="profile">
      <section className="top-info">
        <div className="avatar">
          {/* <img src={"https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/eula/image.png?strip=all&quality=75&w=256"} alt="avatar"/> */}
          <img
            src={
              "https://images.pexels.com/photos/2364633/pexels-photo-2364633.jpeg?cs=srgb&dl=pexels-hiwatalaei-2364633.jpg&fm=jpg"
            }
            alt="avatar"
          />
        </div>
        <div className="username">{username}</div>
        <div className="description"></div>
      </section>
      <section className="main-info">
        <form>
          <div className="row">
            <div className="mb-3 col-sm-12">
              <label for="fullname" className="form-label">
                Fullname
              </label>
              <input type="text" className="form-control" id="fullname" />
            </div>
            <div className="mb-3 col-sm-12">
              <label for="phone-number" className="form-label">
                Phone number
              </label>
              <input type="number" className="form-control" id="phone-number" />
            </div>
            <div className="mb-3 col-sm-12">
              <label for="address" className="form-label">
                Address
              </label>
              <input type="text" className="form-control" id="address" />
            </div>
            {/* <div className="mb-3 col-sm-12">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
            </div> */}
            <div className="mb-3 col-sm-12">
              <label for="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary col-md-2 col-sm-12" onClick={submitChange}>
            Change
          </button>
        </form>
      </section>
    </div>
  );
}

export default Account;
