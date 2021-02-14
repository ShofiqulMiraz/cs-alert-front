import "./search.scss";

const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container">
          <div className="search__input">
            <input
              type="text"
              name="search"
              placeholder="Enter domain,resource or company name.."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
