import Skeleton from "react-loading-skeleton";

const ScamDetails = ({ scam }) => {
  console.log(scam);
  console.log(scam.description);
  const htmlPart = `${scam.description}`;
  return (
    <>
      {scam && (
        <div className="container">
          <h1 className="mt-5"> {scam.title || <Skeleton />} </h1>{" "}
          {scam.description ? (
            <div dangerouslySetInnerHTML={{ __html: htmlPart }} />
          ) : (
            <Skeleton height={100} />
          )}
        </div>
      )}
    </>
  );
};

export default ScamDetails;
