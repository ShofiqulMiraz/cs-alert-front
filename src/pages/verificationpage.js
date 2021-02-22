import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import "./verificationpage.scss";
import Footer from "../components/footer/footer";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import useClipboard from "react-use-clipboard";
import { Helmet } from "react-helmet-async";

const VerificationPage = () => {
  const [isCopiedBTC, setCopiedBTC] = useClipboard(
    "1M24NovHG8zcrpa3z28cpDGy4eBxicKure"
  );
  const [isCopiedETH, setCopiedETH] = useClipboard(
    "0xebE321bc7a19dDbdA2550068840fdE5e0FfeE542"
  );
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const [loading, setloading] = useState();
  const onSubmit = async (data) => {
    try {
      setloading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "https://cs-alert-api.herokuapp.com/api/verification",
        data,
        config
      );
      setloading(false);
      toast.success(
        "Successfully Submitted your Request. We will talk back to you very soon."
      );
      history.push("/");
    } catch (error) {
      const err = error.response.data;
      toast.error(err);
      setloading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>CryptoScamAlert | Request Verification </title>
      </Helmet>
      <div className="container mt-2">
        <h1 className="verificationpage__head-title">Request Verification</h1>
        <p className="verificationpage__head-para">
          Interested in investing in crypto? Received some lucrative offer
          promising 10%+ daily profits? Have not found your potential partner on
          our scammers data but still have doubts? <strong>We can help!</strong>{" "}
          We will do and provide you with our research and recommendation on any
          company or individual. Check your partner before investing! THIS IS
          PAID SERVICE but better pay a little than lost a lot dealing with a
          scammer!
        </p>
        <hr className="alert__hr" />
      </div>

      <div className="container pt-4 pb-5">
        <div className="row">
          <div className="col-md-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  ref={register({ required: true })}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  ref={register({ required: true })}
                  placeholder="Enter contact email"
                />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="currency" className="form-label">
                    Currency:
                  </label>
                  <select
                    className="form-select"
                    name="currency"
                    ref={register({ required: true })}
                  >
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label htmlFor="transactionAddress" className="form-label">
                      Transaction address:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="transactionAddress"
                      ref={register({ required: true })}
                      placeholder="Transaction Address"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="transactionDate" className="form-label">
                    Transaction date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="transactionDate"
                    defaultValue="2021-01-01"
                    min="2021-01-01"
                    max="2025-12-31"
                    ref={register({ required: true })}
                  />
                </div>
                <small className="form-text text-muted mt-0">
                  ETH ot BTC address you sent payment from
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="request" className="form-label">
                  Request:
                </label>
                <textarea
                  className="form-control"
                  name="request"
                  rows="6"
                  ref={register({ required: true })}
                ></textarea>
                <small className="form-text text-muted">
                  Please write down as much information as possible
                </small>
              </div>

              <button type="submit" className="btn btn-primary mb-3 mt-2">
                {loading ? " Submitting Request ..." : " Request Verification"}
              </button>
            </form>
          </div>
          <div
            className={
              window.innerWidth > 768
                ? `col-md-5 verification-right`
                : `col-md-5 verification-right order-first mb-4`
            }
          >
            <h4>You can pay using ETH or BTC. Price for the research:</h4>
            <div className="btc-pay">
              <h3>BTC - 0.01</h3>
              <div className="mb-3">
                <label htmlFor="btc" className="form-label">
                  Our Btc address:
                </label>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="1M24NovHG8zcrpa3z28cpDGy4eBxicKure"
                    readOnly
                  />
                  <button className="btn btn-success" onClick={setCopiedBTC}>
                    {isCopiedBTC ? (
                      <i className="fas fa-clipboard-check"></i>
                    ) : (
                      <i className="far fa-clipboard"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="eth-pay">
              <h3>ETH - 0.25</h3>
              <div className="mb-3">
                <label htmlFor="btc" className="form-label">
                  Our Eth address:
                </label>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="0xebE321bc7a19dDbdA2550068840fdE5e0FfeE542"
                    readOnly
                  />
                  <button className="btn btn-success" onClick={setCopiedETH}>
                    {isCopiedETH ? (
                      <i className="fas fa-clipboard-check"></i>
                    ) : (
                      <i className="far fa-clipboard"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <hr className="alert__hr mt-4 mb-4" />
            <p>
              Fill in the form and send us your request. Thank you for using our
              service!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VerificationPage;
