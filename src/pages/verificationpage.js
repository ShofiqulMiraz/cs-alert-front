import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import "./verificationpage.scss";
import Footer from "../components/footer/footer";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const VerificationPage = () => {
  let history = useHistory();
  const [markdownvalue, setmarkdownvalue] = useState("");
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
      await axios.post("/api/verification", data, config);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Scammer's Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  ref={register({ required: true, maxLength: 20 })}
                  placeholder="Enter Scammer Name"
                />
                <small className="form-text text-muted">
                  Scammer's personal name or the company name.
                </small>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="scammerslink" className="form-label">
                  Scammer's Link:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  ref={register({ required: true })}
                  placeholder="example.com"
                />
                <small className="form-text text-muted">
                  Link to the scammer's social media profile, blog or the
                  website
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="scammerstype" className="form-label">
                  Scam Type:
                </label>
                <select
                  className="form-select"
                  name="type"
                  ref={register({ required: true })}
                >
                  <option value="ico">ICO</option>
                  <option value="cryptoblogger">Crypto Blogger</option>
                  <option value="cryptoexchange">Crypto Exchange</option>
                  <option value="telegram">Telegram</option>
                  <option value="ponzi">Ponzi</option>
                  <option value="bitcoinmixers">Bitcoin Mixers</option>
                  <option value="bitcoincasinos">Bitcoin Casinos</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div> */}
          </div>

          <button type="submit" className="btn btn-primary mb-3 mt-2">
            {loading ? " Submitting Request ..." : " Request Verification"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default VerificationPage;
