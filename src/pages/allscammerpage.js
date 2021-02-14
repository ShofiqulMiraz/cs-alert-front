import { Helmet } from "react-helmet";
import { skeletonUIForDetailsPage } from "../components/skeletonui/skeletonui";

const AllScammerPage = () => {
  return (
    <>
      <Helmet>
        <title>Devconnector | AllScammerPage</title>
      </Helmet>
      <div className="container mt-5">
        <div className="row">{skeletonUIForDetailsPage()}</div>
      </div>
    </>
  );
};

export default AllScammerPage;
