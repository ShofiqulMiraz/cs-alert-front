import "./search.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  let history = useHistory();
  const [searchterm, setsearchterm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${searchterm}`);
  };
  return (
    <>
      <section className="search">
        <div className="container">
          <form className="search__input" onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Type domain,resource or company name and press Enter"
              onChange={(e) => setsearchterm(e.target.value)}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Search;
