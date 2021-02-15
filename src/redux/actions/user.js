import axios from "axios";

export const SignUp = (user, token) => {
  window.localStorage.setItem("user", JSON.stringify(user));
  window.localStorage.setItem("jwt", token);
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  return {
    type: "SIGNUP",
    user,
    token,
  };
};

export const Login = (user, token) => {
  window.localStorage.setItem("user", JSON.stringify(user));
  window.localStorage.setItem("jwt", token);
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  return {
    type: "LOGIN",
    user,
    token,
  };
};

export const Logout = () => {
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("jwt");
  axios.defaults.headers.common = { Authorization: null };
  return {
    type: "LOGOUT",
  };
};
