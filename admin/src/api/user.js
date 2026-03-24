import BASE_URL from ".";

const login = async (username, password) => {
  try {
    const result = await fetch(`${BASE_URL}/auth/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(res => res.json());

    return result;
  } catch (error) {
    console.log(error);
  }
};

const signup = async (values) => {
  try {
    const payload = {
      username: values.username,
      password: values.password,
    };

    const result = await fetch(`${BASE_URL}/account/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
    return result;
  } catch (error) {
    console.log(error);
  }
};

const verify = async () => {
  try {
    const result = await fetch(`${BASE_URL}/auth/verify`, {
      method: "POST",
      body: {},
    });

    return result.success;
  } catch (error) {
    console.log(error);
  }
};

export { login, signup, verify };
