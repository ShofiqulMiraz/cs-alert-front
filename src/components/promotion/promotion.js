import "./promotion.scss";
import { Link } from "react-router-dom";

const Promotion = () => {
  return (
    <section className="promotion pt-5 pb-5">
      <div className="container">
        <div className="promotion__upper-text">GETTING STARTED</div>
        <div className="promotion__lower-text">
          If you've witnessed or been the victim of crypto scam, please report
          it here. Registration on the website is very simple. You just need an
          email and password. No any personal information needed.{" "}
          <strong> All reports are anonymous!</strong> You can upload pictures
          of scammers along with any other details and proofs. Thank you for
          helping us making the crypto world Cleaner and Safe! Register today at{" "}
          <Link to="/reportscam">here</Link> and publish info about scammers.
        </div>
      </div>
    </section>
  );
};

export default Promotion;
