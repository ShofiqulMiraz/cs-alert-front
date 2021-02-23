import axios from "axios";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Helmet } from "react-helmet-async";

const SingleScamRequest = ({ match }) => {
  const [scamrequestdetails, setscamrequestdetails] = useState([]);
  const getScamRequestDetails = async () => {
    try {
      const response = await axios.get(
        `https://cs-alert-api.herokuapp.com/api/scamrequest/${match.params.id}`
      );
      const data = response.data;
      console.log(data);
      setscamrequestdetails(data);
    } catch (error) {
      const err = error.response.data;
      console.log(err);
    }
  };
  useEffect(() => {
    getScamRequestDetails();
  }, []);
  return (
    <>
      <Helmet>
        <title>CryptoScamAlert | {match.params.id} </title>
      </Helmet>
      {scamrequestdetails && (
        <section className="singlescamrequest">
          <div className="container">
            <div className="row">
              <h1> {scamrequestdetails?.name || <Skeleton />} </h1>
              {scamrequestdetails?.description ? (
                <div
                  className="scamrequestdetails__description"
                  dangerouslySetInnerHTML={{
                    __html: scamrequestdetails?.description,
                  }}
                />
              ) : (
                <Skeleton height={250} />
              )}
              <p className="scamrequestdetails__author">
                author: {scamrequestdetails?.author?.name || <Skeleton />}
              </p>
              <p className="scamrequestdetails__type">
                type: {scamrequestdetails?.type || <Skeleton />}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleScamRequest;
