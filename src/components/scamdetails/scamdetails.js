import Skeleton from "react-loading-skeleton";
import Footer from "../footer/footer";
import ScamGallery from "../scamgallery/scamgallery";
import "./scamdetails.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ScamDetails = ({ scam }) => {
  const htmlPart = `${scam.description}`;
  const [loading, setloading] = useState(false);

  const handleLikes = async () => {
    try {
      setloading(true);
      await axios.patch(
        `https://cs-alert-api.herokuapp.com/api/scams/${scam._id}/like`
      );
      toast.success("successfully liked report!");
      setloading(false);
    } catch (error) {
      const err = error.response.data;
      toast.error(err);
      setloading(false);
    }
  };
  return (
    <>
      <div className="container scamdetails">
        <div className="row">
          <h1 className="scamdetails__head">Crypto Scam Report</h1>
          <p className="scamdetails__para">
            Reported by : {scam.author || <Skeleton width={100} />}
          </p>
        </div>
        <hr className="alert__hr mb-3" />
        <div className="votes">
          <p>
            Votes:
            {(scam?.likes?.length > 1 && ` ${scam.likes.length}`) || ` 0`}
          </p>

          <button className="likebtn btn btn-primary " onClick={handleLikes}>
            <i className="fas fa-thumbs-up"></i>{" "}
            <span> {loading ? "voting..." : "vote this report"} </span>
          </button>
        </div>
        <hr className="alert__hr mt-3" />
        <div className="row">
          <h1 className="scamdetails__title"> {scam.title || <Skeleton />} </h1>
        </div>
        <hr className="alert__hr" />
        <div className="row">
          <div className="col-md-6">
            <p className="scamdetails__para-small">Scam Description</p>
            {scam.description ? (
              <div
                className="scamdetails__description"
                dangerouslySetInnerHTML={{ __html: htmlPart }}
              />
            ) : (
              <Skeleton height={150} />
            )}
          </div>
          <div className="col-md-6">
            <p className="scamdetails__para-small">Scammer Type</p>
            <p className="scamdetails__type"> {scam.type || <Skeleton />} </p>
            <p className="scamdetails__para-small">Scammer's Link</p>
            <p className="scamdetails__link"> {scam.link || <Skeleton />} </p>
          </div>
        </div>
      </div>
      <ScamGallery />
      <Footer />
    </>
  );
};

export default ScamDetails;
