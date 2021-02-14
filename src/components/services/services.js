import "./services.scss";
import { Link } from "react-router-dom";

const ServicesDescription = [
  {
    icon: "far fa-eye",
    title: "We follow",
    description:
      "We are constantly monitoring the crypto currency market in search of fraudsters and how do they work. If you are a Victim of any Crypto Scam - Please report the incident to CryptoScamAlert.com",
    buttontext: "Report Now",
    linkto: "/reportscam",
  },
  {
    icon: "fas fa-thumbs-up",
    title: "Actual database",
    description:
      "Our database is constantly updated by us and users of CryptoScamAlert. If you've witnessed or been the victim of crypto scam, please report it here. It may help us to bring the offender to justice and make sure this doesn't happen to anyone else.",
    buttontext: "See Scammers",
    linkto: "/allscammers",
  },
  {
    icon: "fas fa-user-friends",
    title: "Free and Anonymous!",
    description:
      "This is a free and user-friendly project. We keep your privacy. You just need to have an email to register. No other personal details required. All reports are Anonymous!",
    buttontext: "Register & Report",
    linkto: "/reportscam",
  },
  {
    icon: "fas fa-user-check",
    title: "Verification!",
    description:
      "Interested in investing in crypto? Have not found your potential partner on our scammers data but still have doubts? We can help! We will do and provide you with our research and recommendation on any company or individual.",
    buttontext: "Request Verification",
    linkto: "/verification",
  },
];

const Services = () => {
  return (
    <>
      <section className="service mt-5 mb-5">
        <div className="container-fluid">
          <div className="service__card-container">
            {ServicesDescription.map((service, index) => (
              <div className="service__card-desc" key={index}>
                <i className={service.icon}></i>
                <h4> {service.title} </h4>
                <p> {service.description} </p>
                <Link
                  to={service.linkto}
                  className={`btn service__buttons-${index + 1}`}
                >
                  {service.buttontext}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="container mt-5">
          <p className="service__cta">
            The <span className="text-black">Crypto</span>
            <span className="text-red">ScamAlert</span> database contains the
            most up-to-date information about Crypto ICOs, Crypto Bloggers,
            Crypto Exchanges and how some of them scam people. If you've
            witnessed or been the victim of crypto scam, please report it{" "}
            <Link to="/reportscam">here!</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
