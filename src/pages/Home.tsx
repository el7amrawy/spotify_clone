import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faMoon,
  faSun,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import config from "../config";
import Song from "../components/Song";
import { useDraggable } from "react-use-draggable-scroll";

type Song = {
  id: string;
  name: string;
  imgs: Object[];
};

const Home = () => {
  /* ---------------- states ---------------- */
  const [newReleases, setNewReleases] = useState([] as unknown as Song[]);

  /* ---------------- effects ---------------- */
  useEffect(() => {
    axios
      .get(config.api + "/browse/new-releases?limit=15", {
        headers: {
          Authorization: config.token,
        },
      })
      .then(({ data }) => {
        const songs: Song[] = data.albums.items;
        setNewReleases(songs);
      });
  }, []);

  /* ------------- draggable scroll ------------------- */
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <section id="home">
      <div id="hero">
        <p>
          Your favourite tunes
          <span>
            All <FontAwesomeIcon icon={faSun} style={{ color: "gold" }} /> and
            all <FontAwesomeIcon icon={faMoon} style={{ color: "#777" }} />
          </span>
        </p>
      </div>
      <div id="releases">
        <div className="headline-cont">
          <h3>New Releases</h3>
          <div className="line"></div>
          <div className="conrolers-cont">
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={() => {
                const elem = document.querySelector(
                  ".new-releases-cont"
                ) as HTMLElement;
                elem.scrollLeft -= 100;
              }}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={() => {
                const elem = document.querySelector(
                  ".new-releases-cont"
                ) as HTMLElement;
                elem.scrollLeft += 100;
              }}
            />
          </div>
        </div>
        <div className="new-releases-cont" ref={ref} {...events}>
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
        </div>
      </div>
    </section>
  );
};

export default Home;
