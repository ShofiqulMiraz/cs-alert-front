export const SignUp = (user, token) => {
  window.localStorage.setItem("user", JSON.stringify(user));
  window.localStorage.setItem("jwt", token);
  return {
    type: "SIGNUP",
    user,
    token,
  };
};

export const Login = (user, token) => {
  window.localStorage.setItem("user", JSON.stringify(user));
  window.localStorage.setItem("jwt", token);
  return {
    type: "LOGIN",
    user,
    token,
  };
};

export const Logout = () => {
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("jwt");
  return {
    type: "LOGOUT",
  };
};
