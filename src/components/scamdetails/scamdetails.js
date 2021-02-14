import Skeleton from "react-loading-skeleton";

const ScamDetails = ({ scam }) => {
  return (
    <>
      <div className="container">
        <h1 className="mt-5"> {scam.title || <Skeleton />} </h1>{" "}
        <div> {scam.description || <Skeleton />} </div>
      </div>
    </>
  );
};

export default ScamDetails;
