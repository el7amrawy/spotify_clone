import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import SongsList from "../components/SongsList";
import axios from "axios";
import config from "../config";
import { useEffect, useState } from "react";
import { SongData } from "../components/SongsList";

const Home = () => {
  /* ---------------- states ---------------- */
  const [songs1, setSongs1] = useState([] as SongData[]);
  const [songs2, setSongs2] = useState([] as SongData[]);
  /* ---------------- effects ---------------- */
  useEffect(() => {
    axios
      .get(config.api + "/charts/track?pageSize=20&startFrom=0", {
        headers: config.headers,
      })
      .then(({ data }) => {
        const songs: SongData[] = data.tracks;
        setSongs1(songs);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        config.api + "/songs/list-recommendations?key=484129036&locale=en-US",
        {
          headers: config.headers,
        }
      )
      .then(({ data }) => {
        const songs: SongData[] = data.tracks;
        setSongs2(songs);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  /* ------------- elems ------------------- */
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
      <SongsList name="Popular Songs" songs={songs1} />
      <SongsList name="Recommendations" songs={songs2} />
    </section>
  );
};

export default Home;
