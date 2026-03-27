import BASE_URL from ".";

const login = async (username, password) => {
  try {
    const result = await fetch(`${BASE_URL}/auth/user/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());

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

const logout = async () => {
  try {
    const result = await fetch(`${BASE_URL}/auth/user/logout`, {
      method: "POST",
      credentials: "include"
    }).then(result => result.json())
    return result
  } catch (error) {
    console.log(error);
  }
}

const verify = async () => {
  try {
    const result = await fetch(`${BASE_URL}/auth/me`, {
      method: "POST",
      credentials: "include",
    }).then((result) => result.json());

    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (payload) => {
  try {
    console.log(payload.imageFile);

    const formData = new FormData();
    Object.keys(payload).forEach((key) => {
      if (key !== "imageFile" && key !== "image") {
        formData.append(key, payload[key]);
      }
    });

    formData.append("image", JSON.stringify(payload.image));
    formData.append("image_file", payload.imageFile);
    
    const result = await fetch(`${BASE_URL}/user/update`, {
      method: "PUT",
      credentials: "include",
      body: formData,
    }).then((result) => result.json());

    return result;
  } catch (error) {
    console.log(error);
  }
};

export { login, signup, logout, verify, updateUser };
