import Skeleton from "react-loading-skeleton";
import Footer from "../footer/footer";
import ScamGallery from "../scamgallery/scamgallery";
import "./scamdetails.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ScamDetails = ({ scam }) => {
  const htmlPart = `${scam.description}`;
  const [likeloading, setlikeloading] = useState(false);
  const [unlikeloading, setunlikeloading] = useState(false);

  const handleLike = async () => {
    try {
      setlikeloading(true);
      await axios.patch(
        `/scams/${scam._id}/like`
      );
      toast.success("successfully liked report!");
      setlikeloading(false);
    } catch (error) {
      const err = error.response.data;
      toast.error(err);
      setlikeloading(false);
    }
  };
  const handleUnLike = async () => {
    try {
      setunlikeloading(true);
      await axios.patch(
        `/scams/${scam._id}/unlike`
      );
      toast.success("successfully unliked report!");
      setunlikeloading(false);
    } catch (error) {
      const err = error.response.data;
      toast.error(err);
      setunlikeloading(false);
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
            {" "}
            Votes:{" "}
            {scam?.likes?.length >= 0 ? (
              `${scam.likes.length}`
            ) : (
              <Skeleton width={100} />
            )}
          </p>
          <div className="votelikeunlike">
            <button className="likebtn btn btn-primary me-2" onClick={handleLike}>
              <i className="fas fa-thumbs-up"></i>{" "}
              <span> {likeloading && "..."} </span>
            </button>
            <button
              className="unlikebtn btn btn-primary"
              onClick={handleUnLike}
            >
              <i className="fas fa-thumbs-down"></i>{" "}
              <span> {unlikeloading && "..."} </span>
            </button>
          </div>
        </div>
        <hr className="alert__hr mt-3" />
        <div className="row">
          <h1 className="scamdetails__title"> {scam.title || <Skeleton />} </h1>
        </div>
        <hr className="alert__hr" />
        <div className="row pt-3 pb-4">
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
