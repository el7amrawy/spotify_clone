import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faMagnifyingGlass,
  faHeart,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { useState, SyntheticEvent } from "react";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const clickHandler = (ev: SyntheticEvent) => {
    const activeTab = document.querySelector("#sidebar > div.active-tab");
    const target = ev.target as HTMLElement;
    let tabName = "";
    activeTab?.classList.remove("active-tab");
    if (target.tagName === "A") {
      target.parentElement?.classList.add("active-tab");
      tabName = target.textContent as unknown as string;
    } else {
      target.classList.add("active-tab");
      tabName = target.firstChild?.textContent as unknown as string;
    }
    setActiveTab(tabName);
  };

  return (
    <aside id="sidebar">
      <div className="active-tab" onClick={clickHandler}>
        <a>
          <FontAwesomeIcon icon={faBarsStaggered} />
          home
        </a>
      </div>
      <div onClick={clickHandler}>
        <a>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          search
        </a>
      </div>
      <div onClick={clickHandler}>
        <a>
          <FontAwesomeIcon icon={faHeart} />
          favourites
        </a>
      </div>
      <div onClick={clickHandler}>
        <a>
          <FontAwesomeIcon icon={faCirclePlay} />
          playlists
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
