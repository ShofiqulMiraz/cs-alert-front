import { useForm } from "react-hook-form";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";

const ReportScamPage = () => {
  const [markdownvalue, setmarkdownvalue] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const description = `${markdownvalue}`;
      const body = { description, ...data };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(body);
      const res = await axios.post("/api/scamrequest", body, config);
      console.log(res);
    } catch (error) {
      // const err = error.response;
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5 pt-5 pb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Scammer's name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  ref={register({ required: true, maxLength: 20 })}
                  placeholder="enter scammer name"
                />
                <small className="form-text text-muted">
                  Scammer's personal name or the company name.
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="scamdetails" className="form-label">
                  Scam description:
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
                  Scammer's link:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  ref={register}
                  placeholder="example.com"
                />
                <small className="form-text text-muted">
                  Link to the scammer's social media profile, blog or the
                  website
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="scammerstype" className="form-label">
                  Scam type:
                </label>
                <select className="form-select" name="type" ref={register}>
                  <option value="ico">ICO</option>
                  <option value="cryptoblogger">Crypto Blogger</option>
                  <option value="telegram">Telegram</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mb-3 mt-2">
            Report Scam
          </button>
        </form>
      </div>
    </>
  );
};

export default ReportScamPage;
