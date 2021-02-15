import "./topscam.scss";
import { Link } from "react-router-dom";
import { skeletonUIForHomepage } from "../skeletonui/skeletonui";
import Scam from "../scam/scam";

const TopScam = ({ scams, loading }) => {
  return (
    <>
      <section className="topscams pt-5 pb-5">
        <div className="container">
          <div className="alert__head">
            Top on <span className="alert__head-left">Crypto</span>
            <span className="alert__head-right">ScamAlert</span>
          </div>
          <div className="alert__para">
            Below are the top scammers in the CryptoScamAlert database
          </div>
          <hr className="alert__hr" />
          <div className="row topscamlist">
            {loading && skeletonUIForHomepage()}
            <Scam scams={scams} />
            <div className="see-all-report">
              <Link to="/allscammers" className="btn see-all-report-btn">
                {" "}
                See All Report <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopScam;
