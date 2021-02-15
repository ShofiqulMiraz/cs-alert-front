import axios from "axios";
import React, { useState, useEffect } from "react";
import ScamDetails from "../components/scamdetails/scamdetails";

const SingleScamDetailsPage = ({ match }) => {
  const [scamDetails, setscamDetails] = useState({});
  const getScamDetails = async () => {
    try {
      const response = await axios.get(`/api/scams/${match.params.id}`);
      const scam = response.data[0];
      setscamDetails(scam);
    } catch (error) {
      const err = error.response.data.message;
      console.log(err);
      alert(err);
    }
  };

  useEffect(() => {
    getScamDetails();
  }, []);
  return (
    <>
      <ScamDetails scam={scamDetails} />
    </>
  );
};

export default SingleScamDetailsPage;
