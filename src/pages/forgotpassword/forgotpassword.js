import "./forgotpassword.scss";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const ForgotPassword = () => {
  const { isloggedin } = useSelector((state) => state.userReducer);
  const { register, handleSubmit } = useForm();
  const [loading, setloading] = useState(false);
  const onSubmit = async (data) => {
    try {
      setloading(true);
      const res = await axios.post(
        "https://cs-alert-api.herokuapp.com/api/users/forgotpassword",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setloading(false);
      toast.success(res.data);
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
        <title>CryptoScamAlert | Forgot Password</title>
      </Helmet>
      <section className="forgotpassword">
        <div className="container forgotpassword__container">
          <div className="row">
            <h3 className="forgotpassword__head pt-5">
              forgot your password? Let us help!
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                  required
                  ref={register}
                />
                <label htmlFor="email">Enter Your Email address</label>
              </div>
              <button type="submit" className="btn btn-primary">
                {loading ? "Sending Reset token..." : "Get Reset Token"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
