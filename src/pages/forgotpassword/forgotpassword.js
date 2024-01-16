import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "./forgotpassword.scss";

const ForgotPassword = () => {
    const { isloggedin } = useSelector((state) => state.userReducer);
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const res = await axios.post("/users/forgotpassword", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setLoading(false);
            toast.success(res.data);
        } catch (error) {
            const err = error.response.data;
            toast.error(err);
            setLoading(false);
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
                        <h3 className="forgotpassword__head pt-5">Forgot your password? Let us help!</h3>
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
