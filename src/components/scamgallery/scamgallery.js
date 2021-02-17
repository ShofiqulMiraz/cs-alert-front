import "./scamgallery.scss";

const ScamGallery = () => {
  return (
    <>
      <section className="scamgallery pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="alert__head">
              <span className="alert__head-left">Crypto</span>
              <span className="alert__head-right">ScamAlert</span> Gallery
            </div>
            <div className="alert__para">
              Random scammers in the CryptoScamAlert database
            </div>
          </div>

          <hr className="alert__hr" />

          <div className="row d-flex flex-wrap">
            <img
              src="https://robohash.org/1"
              className="img-fluid"
              alt="1"
              style={{ height: "150px", maxWidth: "150px" }}
            />
            <img
              src="https://robohash.org/2"
              className="img-fluid"
              alt="1"
              style={{ height: "150px", maxWidth: "150px" }}
            />
            <img
              src="https://robohash.org/3"
              className="img-fluid"
              alt="1"
              style={{ height: "150px", maxWidth: "150px" }}
            />
            <img
              src="https://robohash.org/4"
              className="img-fluid"
              alt="1"
              style={{ height: "150px", maxWidth: "150px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ScamGallery;
