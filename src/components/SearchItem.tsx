import { Link } from "react-router-dom";

export type Hint = {
  term: string;
};

type SearchItemProps = {
  hint: Hint;
};

const SearchItem = (props: SearchItemProps) => {
  const { hint } = props;

  return (
    <Link to={hint.term} className="search-item">
      <h3>{hint.term}</h3>
    </Link>
  );
};

export default SearchItem;
