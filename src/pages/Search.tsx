import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (searchValue.length) {
      axios
        .get(config.api + "/auto-complete", {
          headers: config.headers,
          params: {
            term: searchValue,
          },
        })
        .then(({ data }) => {
          console.log(data);
        });
    }
  }, [searchValue]);
  return (
    <section id="search">
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          value={searchValue}
          onChange={(ev) => setSearchValue(ev.target.value)}
          placeholder="search"
        />
      </div>
      <div className="seacrh-results">ss</div>
    </section>
  );
};

export default Search;
