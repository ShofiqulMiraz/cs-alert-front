import "./postnewscampage.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const PostNewScamPage = () => {
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
      await axios.post("/scams", body, config);
      setloading(false);
      toast.success("Successfully added new post.");
    } catch (error) {
      const err = error.response.data;
      toast.error(err);
      setloading(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>CryptoScamAlert | Post New Scam</title>
      </Helmet>
      <div className="container mt-2">
        <h1 className="reportscampage__head-title">
          Post New Crypto Scam (Admin){" "}
        </h1>
        <hr className="alert__hr" />
      </div>

      <div className="container pt-4 pb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  ref={register({ required: true, maxLength: 1000 })}
                  placeholder="Scam Post Title"
                />
                <small className="form-text text-muted">Scam post title</small>
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
                <label htmlFor="author" className="form-label">
                  Original Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  ref={register({ required: true })}
                  placeholder="Post Author"
                />
                <small className="form-text text-muted">
                  author name from who requested to audit
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
            {loading ? "Reporting Scam..." : "Report Scam"}
          </button>
        </form>
      </div>
    </>
  );
};

export default PostNewScamPage;
