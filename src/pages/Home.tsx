import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config";
import Song from "../components/Song";

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

  /* -------------------------------- */

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
        </div>
        <div className="new-releases-cont">
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
