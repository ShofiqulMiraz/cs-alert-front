import "./newestscam.scss";
import { Link } from "react-router-dom";
import { skeletonUIForHomepage } from "../skeletonui/skeletonui";

const NewestScam = ({ scams, loading }) => {
  return (
    <>
      <section className="newestscams pt-5 pb-5">
        <div className="container">
          <div className="alert__head">
            Newest on <span className="alert__head-left">Crypto</span>
            <span className="alert__head-right">ScamAlert</span>
          </div>
          <div className="alert__para">
            Below are the latest added scammers to the CryptoScamAlert database
          </div>
          <hr className="alert__hr" />
          <div className="row newscamlist">
            {loading && skeletonUIForHomepage()}

            {scams.map((scam, index) => {
              return (
                <div className="col-md-4 mb-2" key={index}>
                  <div className="newscamlist__box">
                    <div className="newscamlist__box-text">
                      <p className="newscamlist__box-text-title">Scammer</p>

                      <Link
                        to={`/scams/${scam.slug}`}
                        className="newscamlist__box-text-head"
                      >
                        <div> {scam.title} </div>
                      </Link>

                      <p className="newscamlist__box-text-type">
                        Scam Type : {scam.type}{" "}
                      </p>
                      <p className="newscamlist__box-text-vote">
                        voted: {scam.likes.length}{" "}
                      </p>
                      <p className="newscamlist__box-text-author">
                        Reported by: {scam.author} , at date here
                      </p>
                    </div>
                    <hr className="alert__hr" />
                    <div className="newscamlist__box-btn mt-1">
                      <Link to={`/scams/${scam.slug}`} className="btn">
                        {" "}
                        See Details <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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

export default NewestScam;
