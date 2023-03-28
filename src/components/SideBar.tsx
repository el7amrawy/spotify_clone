import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faMagnifyingGlass,
  faHeart,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { usePlaylists } from "../context/PlaylistsProvider";
import AddToPlaylist from "./AddToPlaylist";
import { useChosedSong } from "../context/ChosedSongProvider";

const SideBar = () => {
  const { togglePlaylist } = usePlaylists();
  const { chosedSong } = useChosedSong();
  const clickHandler = (ev: SyntheticEvent) => {
    const activeTab = document.querySelector("#sidebar > a.active-tab");
    const target = ev.target as HTMLElement;
    activeTab?.classList.remove("active-tab");
    target.classList.add("active-tab");
  };

  return (
    <>
      {togglePlaylist ? <AddToPlaylist song={chosedSong} /> : null}
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
    </>
  );
};

export default SideBar;
