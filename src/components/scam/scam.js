import "./scam.scss";
import { Link } from "react-router-dom";

const Scam = ({ scams }) => {
  return (
    <>
      {scams.map((scam, index) => (
        <div className="col-md-4 mb-2" key={index}>
          <div className="scamlist__box">
            <div className="scamlist__box-text">
              <p className="scamlist__box-text-title">Scammer</p>

              <Link
                to={`/scams/${scam.slug}`}
                className="scamlist__box-text-head"
              >
                <div> {scam.title} </div>
              </Link>

              <p className="scamlist__box-text-type">
                Scam Type : {scam.type}{" "}
              </p>
              <p className="scamlist__box-text-vote">
                voted: {scam.likes.length}{" "}
              </p>
              <p className="scamlist__box-text-author">
                Reported by: {scam.author}
              </p>
            </div>
            <hr className="alert__hr" />
            <div className="scamlist__box-btn mt-1">
              <Link to={`/scams/${scam.slug}`} className="btn">
                {" "}
                See Details <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Scam;
