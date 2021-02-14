import "./hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__head">
            <span className="hero__head-left">Crypto</span>
            <span className="hero__head-right">ScamAlert</span>
          </div>
          <div className="hero__para mt-2 mb-4">
            <span className="hero__para-title">
              Regularly updated database of <strong>crypto frauds</strong>{" "}
              reported by <strong>real victims.</strong> Read, Report and Help
              us making the Crypto World Healthier, Cleaner and Safe!
            </span>
            <br />
            <span className="hero__para-question">
              ARE YOU A VICTIM? REPORT IT!
            </span>
          </div>
          <div className="hero__buttons">
            <Link to="/allscammers" className="btn hero__buttons-1">
              View Scams
            </Link>

            <Link to="/reportscam" className="btn hero__buttons-2">
              Report New Scams
            </Link>
            <Link to="/verification" className="btn hero__buttons-3">
              Request Verification
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
