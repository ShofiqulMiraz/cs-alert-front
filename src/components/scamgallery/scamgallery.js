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

          <div className="row">
            <div className="col mb-2">
              <img src="https://via.placeholder.com/130" alt="1" />
            </div>
            <div className="col mb-2">
              <img src="https://via.placeholder.com/130" alt="1" />
            </div>
            <div className="col mb-2">
              <img src="https://via.placeholder.com/130" alt="1" />
            </div>
            <div className="col mb-2">
              <img src="https://via.placeholder.com/130" alt="1" />
            </div>
            <div className="col mb-2">
              <img src="https://via.placeholder.com/130" alt="1" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScamGallery;
