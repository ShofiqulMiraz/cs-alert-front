import { skeletonUIForDetailsPage } from "../components/skeletonui/skeletonui";
import { useState, useEffect } from "react";
import axios from "axios";
import Scam from "../components/scam/scam";
import "./allscammerpage.scss";
import ScamGallery from "../components/scamgallery/scamgallery";
import Footer from "../components/footer/footer";

const AllScammerPage = () => {
  const [scamssortedbylikes, setscamssortedbylikes] = useState([]);
  const [loading, setloading] = useState(false);

  const getScamsByLikes = async () => {
    try {
      setloading(true);
      const response = await axios.get(`/api/scams?limit=20`);
      const scams = response.data;
      setscamssortedbylikes(scams);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getScamsByLikes();
  }, []);
  return (
    <>
      <section className="allscammerpage mt-2">
        <div className="container">
          <div className="row">
            <div className="allscammerpage__head">
              <h1 className="allscammerpage__head-title">
                All Crypto Scammers (1036)
              </h1>
              <p className="allscammerpage__head-para">
                Below are the list of scammers in the CryptoScamAlert database.
                Scammers list ordered by voting.
              </p>
            </div>
            <div className="search__input mb-4">
              <input
                type="text"
                name="search"
                placeholder="Enter domain,resource or company name.."
              />
            </div>
            {loading && skeletonUIForDetailsPage()}
            <Scam scams={scamssortedbylikes} />
          </div>
        </div>
        <ScamGallery />
        <Footer />
      </section>
    </>
  );
};

export default AllScammerPage;
