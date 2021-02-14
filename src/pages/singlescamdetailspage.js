import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ScamDetails from "../components/scamdetails/scamdetails";

const SingleScamDetailsPage = ({ match }) => {
  const [scamDetails, setscamDetails] = useState({});
  console.log(match);

  useEffect(async () => {
    try {
      const response = await axios.get(`/api/scams/${match.params.id}`);
      console.log(response);
      const scam = response.data[0];
      setscamDetails(scam);
    } catch (error) {
      const err = error.response.data.message;
      console.log(err);
      alert(err);
    }
  }, []);
  return (
    <>
      <Helmet>
        ( <title>{`Devconnector | ${scamDetails.title}`}</title> )
      </Helmet>
      <ScamDetails scam={scamDetails} />
    </>
  );
};

export default SingleScamDetailsPage;
