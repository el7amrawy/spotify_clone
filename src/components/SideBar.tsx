import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faMagnifyingGlass,
  faHeart,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <aside id="sidebar">
      <div className="active-tab">
        <a>
          <FontAwesomeIcon icon={faBarsStaggered} />
          Home
        </a>
      </div>
      <div>
        <a>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search
        </a>
      </div>
      <div>
        <a>
          <FontAwesomeIcon icon={faHeart} />
          Favourites
        </a>
      </div>
      <div>
        <a>
          <FontAwesomeIcon icon={faCirclePlay} />
          Playlists
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
