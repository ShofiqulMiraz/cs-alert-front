import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./resetpassword.scss";
import { Login } from "../../redux/actions/user";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const ResetPassword = ({ match }) => {
  const { isloggedin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [loading, setloading] = useState(false);
  const onSubmit = async (data) => {
    try {
      setloading(true);
      const res = await axios.patch(
        `https://cs-alert-api.herokuapp.com/api/users/resetpassword/${match.params.token}`,
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
      toast.success(
        "Successfully reseted password. Use you new password from now!"
      );
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
        <title>CryptoScamAlert | Reset Password</title>
      </Helmet>
      <section className="resetpassword">
        <div className="container resetpassword__container">
          <div className="row">
            <h3 className="resetpassword__head pt-5">Enter you new password</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  ref={register}
                  placeholder="Enter Your New Password"
                />
                <label htmlFor="password">Enter Your New Password</label>
              </div>
              <button type="submit" className="btn btn-primary">
                {loading
                  ? "Confirming New Password..."
                  : "Confirm New Password"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
