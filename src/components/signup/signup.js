import { Link } from "react-router-dom";
import "./signup.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { SignUp } from "../../redux/actions/user";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SignUpComponent = () => {
  const { isloggedin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [loading, setloading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setloading(true);
      const res = await axios.post("/users/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { user, token } = res.data;

      dispatch(SignUp(user, token));
      setloading(false);
      toast.success("Successfully Registered!");
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
        <title>CryptoScamAlert | Sign Up </title>
      </Helmet>
      <section className="signup pt-4 pb-5">
        <div className="container signup__container">
          <div className="row">
            <h1 className="signup__title text-center mt-4 mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="name"
                  ref={register}
                  required
                />
                <label htmlFor="floatingInput">Enter Your Name</label>
              </div>
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
                className="btn btn-primary mt-4 signup__button"
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
            <div className="signup__tologin mt-2">
              <span>
                already have an account?{" "}
                <Link to="/login" className="btn">
                  {" "}
                  Log In Now!{" "}
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpComponent;
