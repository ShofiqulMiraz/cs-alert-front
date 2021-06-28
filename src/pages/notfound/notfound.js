import { Link } from "react-router-dom";
import "./notfound.scss";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>CryptoScamAlert | Oooops!</title>
      </Helmet>
      <section className="notfound">
        <div className="container">
          <div className="row">
            <div className="notfound__content">
              <h1 className="notfound__head">Oooops! This Page Not Found!</h1>
              <div className="notfound__link">
                <Link to="/" className="btn btn-primary">
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
