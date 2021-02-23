import React, { useState, useEffect } from "react";
import axios from "axios";
import "./scamrequests.scss";
import { skeletonUIForDetailsPage } from "../../components/skeletonui/skeletonui";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ScamRequests = () => {
  const [scamrequests, setscamrequests] = useState([]);
  const [loading, setloading] = useState(false);
  const [detailsindex, setdetailsindex] = useState(0);

  const getScamRequests = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `https://cs-alert-api.herokuapp.com/api/scamrequest`
      );
      const data = response.data;
      setscamrequests(data);
      setloading(false);
    } catch (error) {
      const err = error.response.data;
      console.log(err);
    }
  };
  useEffect(() => {
    getScamRequests();
  }, []);

  return (
    <>
      <Helmet>
        <title>CryptoScamAlert | Scam Requests</title>
      </Helmet>
      <section className="scamrequests">
        <div className="container">
          <div className="row">
            <h1>ScamRequests For Admin Audit</h1>
            {loading && skeletonUIForDetailsPage()}
            {scamrequests?.map((scamrequest, index) => (
              <div className="scamrequests__title" key={index}>
                <Link to={`/scamrequest/${scamrequest._id}`} className="btn">
                  {" "}
                  <h3> {scamrequest.name} </h3>{" "}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ScamRequests;
