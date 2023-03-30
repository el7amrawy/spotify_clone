import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faMagnifyingGlass,
  faHeart,
  faCirclePlay,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { SyntheticEvent, useEffect, useState, Dispatch } from "react";
import { Link } from "react-router-dom";
import { usePlaylists } from "../context/PlaylistsProvider";
import AddToPlaylist from "./AddToPlaylist";
import { useLocation } from "react-router-dom";

type SideBarProps = {
  toggleSidebar: boolean;
  setToggleSidebar: Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = (/*props: SideBarProps*/) => {
  // const { toggleSidebar, setToggleSidebar } = props;
  /* ---------------------------- */
  const { togglePlaylist } = usePlaylists();
  const loacation = useLocation();
  /* -------------- states -------------- */
  const [currentTab, setCurrentTab] = useState(() =>
    loacation.pathname.split("/")[1].toLocaleLowerCase()
  );

  const clickHandler = (ev: SyntheticEvent) => {
    const target = ev.target as HTMLElement;
    setCurrentTab(target.innerText.toLowerCase());
  };

  useEffect(() => {
    const tabElems = Array.from(
      document.querySelectorAll("#sidebar > a")
    ) as HTMLElement[];

    tabElems.map((elem) => {
      if (elem.innerText.toLocaleLowerCase() === currentTab) {
        elem.classList.add("active-tab");
      } else {
        elem.classList.remove("active-tab");
      }
    });
  }, [currentTab]);

  return (
    <>
      {togglePlaylist ? <AddToPlaylist /> : null}
      <aside id="sidebar">
        <FontAwesomeIcon
          icon={faCircleXmark}
          id="x-mark"
          onClick={() => {
            const sideBar = document.getElementById("sidebar") as HTMLElement;
            const bars = document.getElementById("bars") as HTMLElement;
            sideBar.style.display = "none";
            bars.style.visibility = "visible";
          }}
        />
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
    </>
  );
};

export default SideBar;
