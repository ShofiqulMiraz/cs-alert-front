import axios from "axios";
import React, { useState, useEffect } from "react";
import ScamDetails from "../../components/scamdetails/scamdetails";
import { Helmet } from "react-helmet-async";

const SingleScamDetailsPage = ({ match }) => {
  const [scamDetails, setscamDetails] = useState({});
  const getScamDetails = async () => {
    try {
      const response = await axios.get(
        `https://cs-alert-api.herokuapp.com/api/scams/${match.params.id}`
      );
      const scam = response.data[0];
      console.log(scam);
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
      <Helmet>
        <title>CryptoScamAlert | {match.params.id} </title>
      </Helmet>
      <ScamDetails scam={scamDetails} />
    </>
  );
};

export default SingleScamDetailsPage;
