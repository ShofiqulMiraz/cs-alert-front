import "./footer.scss";

const Footer = () => {
  return (
    <section className="footer pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer__left">
            <div className="footer__left-top">
              <h3>
                WHY <span>CRYPTO</span>
                <span className="alert__head-right">SCAMALERT</span>
              </h3>
            </div>
            <div className="footer__left-bottom">
              <p>
                We are creating the list of scam Initial Coin Offering (ICO)s
                and other crypto services such as scam crypto exchanges and
                social media crypto scammers. All information, proofs,
                investigations came from different people that witnessed or are
                victims of crypto scams and who cares the crypto community from
                scammers and fraudulent ICOs. Users post as much information as
                they can including the descriptions of the incidents, pictures
                of scammers and other proofs of the scams. All credits belong to
                our users who submit their reports. All data put together by
                CryptoScamAlert website to help with information and provide
                knowledge for ICO investors and crypto enthusiast and to raise
                awareness about all kind of crypto scams. We really hope this
                information in the nearest future will be noted by authorities
                such as SEC and Interpol and may help them to bring the
                criminals to justice.
              </p>
            </div>
          </div>
          <div className="col-md-6 footer__right">
            <div className="footer__right-top">
              <h3>DONATION</h3>
              <p>
                Feel free to make a donation to <span>CRYPTO</span>
                <span className="alert__head-right">SCAMALERT</span> to support
                our work. <br /> We really appreciate your help!
                <br />
                BTC: 1M24NovHG8zcrpa3z28cpDGy4eBxicKure
                <br /> ETH: 0xebE321bc7a19dDbdA2550068840fdE5e0FfeE542
              </p>
            </div>
            <div className="footer__right-bottom">
              <h3>SUPPORT</h3>
              <p>
                <a href="mailto:snipershunt@gmail.com">snipershunt@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <hr className="alert__hr" />
        <div className="row">
          <div className="footer__copyright">
            <p>
              Copyright &copy;2019-2021 by{" "}
              <a
                href="https://cryptoscamalert.com"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                CryptoScamAlert.com
              </a>{" "}
              . Terms and Conditions are available on{" "}
              <a
                href="https://cryptoscamalert.com"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                CryptoScamAlert.com
              </a>{" "}
              <br />
              Developed for practice with love by shofiqulmiraz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
