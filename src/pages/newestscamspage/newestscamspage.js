import "./newestscamspage.scss";
import { skeletonUIForDetailsPage } from "../../components/skeletonui/skeletonui";
import { useState, useEffect } from "react";
import axios from "axios";
import Scam from "../../components/scam/scam";
import ScamGallery from "../../components/scamgallery/scamgallery";
import Footer from "../../components/footer/footer";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NewestScamsPage = () => {
  let history = useHistory();
  const [scamssortedbydates, setscamssortedbydates] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchterm, setsearchterm] = useState("");

  const getScamsByLikes = async () => {
    try {
      setloading(true);
      const response = await axios.get(`/scams?limit=20`);
      const scams = response.data;
      setscamssortedbydates(scams);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getScamsByLikes();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${searchterm}`);
  };
  return (
    <>
      <Helmet>
        <title>CryptoScamAlert | Newsest Scams</title>
      </Helmet>
      <section className="newestscampage mt-2">
        <div className="container">
          <div className="row">
            <div className="newestscampage__head">
              <h1 className="newestscampage__head-title">
                Newest Crypto Scammers
              </h1>
              <p className="newestscampage__head-para">
                Below are the list of newest scammers in the CryptoScamAlert
                database.
              </p>
            </div>
            <form className="search__input mb-4" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Type domain,resource or company name and press Enter"
                onChange={(e) => setsearchterm(e.target.value)}
              />
            </form>
            {loading && skeletonUIForDetailsPage()}
            <Scam scams={scamssortedbydates} />
          </div>
        </div>
        <ScamGallery />
        <Footer />
      </section>
    </>
  );
};

export default NewestScamsPage;
