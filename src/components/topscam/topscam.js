import "./topscam.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { skeletonUIForHomepage } from "../skeletonui/skeletonui";

const TopScam = () => {
  const [scams, setscams] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const response = await axios.get(`/api/scams?limit=6`);
    const scams = response.data;
    setscams(scams);
    setloading(false);
  }, []);

  return (
    <>
      <section className="topscams pt-5 pb-5">
        <div className="container">
          <div className="alert__head">
            Top on <span className="alert__head-left">Crypto</span>
            <span className="alert__head-right">ScamAlert</span>
          </div>
          <div className="alert__para">
            Below are the top scammers in the CryptoScamAlert database
          </div>
          <hr className="alert__hr" />
          <div className="row topscamlist">
            {loading && skeletonUIForHomepage()}
            {scams.map((scam, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="topscamlist__box">
                    <div className="topscamlist__box-text">
                      <p className="topscamlist__box-text-title">Scammer</p>

                      <Link
                        to={`/scams/${scam.slug}`}
                        className="topscamlist__box-text-head"
                      >
                        <div> {scam.title} </div>
                      </Link>

                      <p className="topscamlist__box-text-type">
                        Scam Type : {scam.type}{" "}
                      </p>
                      <p className="topscamlist__box-text-vote">
                        voted: {scam.likes.length}{" "}
                      </p>
                      <p className="topscamlist__box-text-author">
                        Reported by: {scam.author} , at local date
                      </p>
                    </div>
                    <hr className="alert__hr" />
                    <div className="topscamlist__box-btn mt-1">
                      <Link to={`/scams/${scam.slug}`} className="btn">
                        {" "}
                        See Details <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="see-all-report">
              <Link to="/allscammers" className="btn see-all-report-btn">
                {" "}
                See All Report <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopScam;
