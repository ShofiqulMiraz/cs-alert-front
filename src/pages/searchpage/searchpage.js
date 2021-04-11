import "./searchpage.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { skeletonUIForDetailsPage } from "../../components/skeletonui/skeletonui";
import Scam from "../../components/scam/scam";
import { Helmet } from "react-helmet-async";

const SearchPage = ({ match }) => {
  const [searchResult, setsearchResult] = useState();
  const getSearchResult = async () => {
    const res = await axios.get(
      `https://cs-alert-api.herokuapp.com/api/scams/search/${match.params.term}`
    );
    setsearchResult(res.data);
  };
  useEffect(() => {
    getSearchResult();
  }, []);

  return (
    <>
      <Helmet>
        <title>CryptoScamAlert | Search | {match.params.term} </title>
      </Helmet>
      <div className="container mt-4">
        <div className="row">
          <h1>Here is Your Search Result... </h1>
          {searchResult ? (
            <>
              <p> We found {searchResult.length} results </p>
              <Scam scams={searchResult} />
            </>
          ) : (
            <>{skeletonUIForDetailsPage()}</>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
