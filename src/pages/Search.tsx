import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import SearchItem, { Hint } from "../components/SearchItem";
const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [autoCompleteResults, setAutoCompleteResults] = useState([] as Hint[]);

  useEffect(() => {
    if (searchValue.length) {
      axios
        .get(config.api + `/auto-complete`, {
          headers: {
            "X-RapidAPI-Key": config.headers.key,
            "X-RapidAPI-Host": config.headers.host,
          },
          params: {
            term: searchValue,
          },
        })
        .then(({ data }) => {
          setAutoCompleteResults(data.hints);
        });
    } else {
      setAutoCompleteResults([]);
    }
  }, [searchValue]);

  const searchItemElems = autoCompleteResults?.map((hint) => (
    <SearchItem hint={hint} key={hint.term} />
  ));
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
      <div className="seacrh-results">{searchItemElems}</div>
    </section>
  );
};

export default Search;
