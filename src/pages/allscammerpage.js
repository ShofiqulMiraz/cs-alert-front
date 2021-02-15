
import { skeletonUIForDetailsPage } from "../components/skeletonui/skeletonui";

const AllScammerPage = () => {
  return (
    <>

      <div className="container mt-5">
        <div className="row">{skeletonUIForDetailsPage()}</div>
      </div>
    </>
  );
};

export default AllScammerPage;
