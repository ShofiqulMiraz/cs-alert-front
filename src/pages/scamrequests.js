import React, { useState, useEffect } from "react";
import axios from "axios";
import "./scamrequests.scss";

const ScamRequests = () => {
  const [scamrequests, setscamrequests] = useState([]);
  const [loading, setloading] = useState(false);
  const [detailsindex, setdetailsindex] = useState(0);

  const getScamRequests = async () => {
    try {
      setloading(true);
      const response = await axios.get(`/api/scamrequest`);
      const data = response.data;
      setscamrequests(data);
      console.log(data);
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
      <section className="scamrequests">
        <div className="container">
          <div className="row">
            <h1>scamrequests for audit</h1>
            {scamrequests?.map((scamrequest, index) => (
              <div className="scamrequests__title" key={index}>
                <h3> {scamrequest.name} </h3>

                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#detailsmodal"
                  onClick={() => {
                    setdetailsindex(index);
                  }}
                >
                  show details
                </button>
              </div>
            ))}

            <div
              className="modal fade"
              id="detailsmodal"
              tabIndex="-1"
              aria-labelledby="detailsmodal"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="detailsmodal">
                      name: {scamrequests[detailsindex]?.name}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="scamrequestdetails__author">
                      author: {scamrequests[detailsindex]?.author?.name}
                    </p>
                    <p className="scamrequestdetails__link">
                      link: {scamrequests[detailsindex]?.link}
                    </p>
                    <p className="scamrequestdetails__type">
                      type: {scamrequests[detailsindex]?.type}
                    </p>
                    <div
                      className="scamrequestdetails__description"
                      dangerouslySetInnerHTML={{
                        __html: scamrequests[detailsindex]?.description,
                      }}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScamRequests;
