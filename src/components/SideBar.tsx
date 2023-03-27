import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faMagnifyingGlass,
  faHeart,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const clickHandler = (ev: SyntheticEvent) => {
    const activeTab = document.querySelector("#sidebar > a.active-tab");
    const target = ev.target as HTMLElement;
    const tabName = target.innerText;
    activeTab?.classList.remove("active-tab");
    target.classList.add("active-tab");
  };

  return (
    <aside id="sidebar">
      <Link className="active-tab" to="home" onClick={clickHandler}>
        <FontAwesomeIcon icon={faBarsStaggered} />
        home
      </Link>
      <Link to="search" onClick={clickHandler}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        search
      </Link>
      <Link to="favourites" onClick={clickHandler}>
        <FontAwesomeIcon icon={faHeart} />
        favourites
      </Link>
      <Link to="playlists" onClick={clickHandler}>
        <FontAwesomeIcon icon={faCirclePlay} />
        playlists
      </Link>
    </aside>
  );
};

export default SideBar;
