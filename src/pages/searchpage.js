import "./searchpage.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { skeletonUIForDetailsPage } from "../components/skeletonui/skeletonui";
import Scam from "../components/scam/scam";

const SearchPage = ({ match }) => {
  const [searchResult, setsearchResult] = useState();
  const getSearchResult = async () => {
    const res = await axios.get(`https://cs-alert-api.herokuapp.com/api/scams/search/${match.params.term}`);
    setsearchResult(res.data);
  };
  useEffect(() => {
    getSearchResult();
  }, []);

  return (
    <>
      {searchResult ? (
        <div className="container mt-4">
          <div className="row">
            <h1>here is your search result: </h1>
            <Scam scams={searchResult} />
          </div>
        </div>
      ) : (
        <div className="container mt-4">
          <div className="row">{skeletonUIForDetailsPage()}</div>
        </div>
      )}
    </>
  );
};

export default SearchPage;
