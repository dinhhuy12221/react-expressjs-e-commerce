import { useSelector } from "react-redux";
import { selectCurrentUsername } from "../../../../features/auth/authSlice";

import "./index.css";
function Account() {
  const username = useSelector(selectCurrentUsername);

  const submitChange = (e) => {
    e.prevenDefault();
  };

  return (
    <div className="profile">
      <section className="top-info"></section>
      <section className="main-info">
        <form className="row">
          <div className="col-md-6">
            <div className="row mb-3">
              <div className="avatar-container col-sm-4">
                <div className="avatar">
                  {/* <img src={"https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/eula/image.png?strip=all&quality=75&w=256"} alt="avatar"/> */}
                  <input className="avatar-chooser" type="file" />
                  <img
                    src={
                      "https://images.pexels.com/photos/2364633/pexels-photo-2364633.jpeg?cs=srgb&dl=pexels-hiwatalaei-2364633.jpg&fm=jpg"
                    }
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="form-group mb-3">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    disabled
                  />
                </div>
                <div className="form-group mb-3">
                  <label for="fullname" className="form-label">
                    Fullname
                  </label>
                  <input type="text" className="default-input" id="fullname" />
                </div>
              </div>
              </div>
            <div className="form-group mb-3 col-sm-12">
              <label for="phone-number" className="form-label">
                Phone number
              </label>
              <input type="number" className="form-control" id="phone-number" />
            </div>
            <div className="form-group mb-3 col-sm-12">
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
            <div className="form-group mb-3 col-sm-12">
              <label for="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button
              type="submit"
              className="btn btn-primary col-md-2 col-sm-12"
              onClick={submitChange}
            >
              Change
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Account;
