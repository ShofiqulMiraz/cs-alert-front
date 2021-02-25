import { Link, Redirect } from "react-router-dom";
import "./login.scss";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { Login } from "../../redux/actions/user";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const LoginComponent = () => {
  const { isloggedin } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [loading, setloading] = useState(false);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      setloading(true);
      const res = await axios.post(
        "https://cs-alert-api.herokuapp.com/api/users/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { user, token } = res.data;
      dispatch(Login(user, token));
      setloading(false);
      toast.success("Successfully Logged in!");
    } catch (error) {
      const err = error.response.data;
      toast.error(err);
      setloading(false);
    }
  };

  if (isloggedin) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Helmet>
        <title>CryptoScamAlert | Log In </title>
      </Helmet>
      <section className="login pt-4 pb-5">
        <div className="container login__container">
          <div className="row">
            <h1 className="login__title text-center mt-4 mb-4">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating mb-4">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                  ref={register}
                  required
                />
                <label htmlFor="floatingInput">Enter Your Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  ref={register}
                  required
                />
                <label htmlFor="floatingPassword">Enter Your Password</label>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-4 login__button"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="login__tosignup mt-2">
              <span>
                don't have an account?{" "}
                <Link to="/signup" className="btn">
                  {" "}
                  Sign Up Now!{" "}
                </Link>{" "}
              </span>
            </div>
            <div className="login__toforgotpassword mt-2">
              <span>
                Forgot your Password?{" "}
                <Link to="/forgotpassword" className="btn">
                  {" "}
                  Reset Here!{" "}
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginComponent;
