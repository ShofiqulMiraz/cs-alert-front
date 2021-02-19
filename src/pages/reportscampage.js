import { useForm } from "react-hook-form";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import "./reportscampage.scss";
import Footer from "../components/footer/footer";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const ReportScamPage = () => {
  let history = useHistory();
  const [markdownvalue, setmarkdownvalue] = useState("");
  const { register, handleSubmit } = useForm();
  const [loading, setloading] = useState();
  const onSubmit = async (data) => {
    try {
      setloading(true);
      const description = `${markdownvalue}`;
      const body = { description, ...data };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post("https://cs-alert-api.herokuapp.com/api/scamrequest", body, config);
      setloading(false);
      toast.success(
        "Successfully Submitted your Request. We will review and add your request to our list soon."
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
        <h1 className="reportscampage__head-title">Report new Crypto scam</h1>
        <p className="reportscampage__head-para">
          If you are a victim of crypto fraud or know about such facts, please
          share this information and help other people not to become a victim of
          scammers. Let's make the crypto world clean and safe together!
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
              <div className="mb-3">
                <label htmlFor="scamdetails" className="form-label">
                  Scam Description:
                </label>
                <MDEditor
                  value={markdownvalue}
                  onChange={setmarkdownvalue}
                  height={300}
                  preview="edit"
                />
                <small className="form-text text-muted">
                  Describe in detail how you became a victim of a fraudster.Use
                  markdown syntax.You can view preview by clicking editors
                  preview button in top right section.
                </small>
              </div>
            </div>
            <div className="col-md-6">
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
            </div>
          </div>

          <button type="submit" className="btn btn-primary mb-3 mt-2">
            {loading ? " Reporting Scam..." : " Report Scam"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ReportScamPage;
