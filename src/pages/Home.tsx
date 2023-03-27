import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import SongsList from "../components/SongsList";

const Home = () => {
  /* ---------------- states ---------------- */
  /* ---------------- effects ---------------- */
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
      <SongsList
        url="/charts/track?pageSize=20&startFrom=0"
        name="Popular Songs"
      />
      <SongsList
        url="/songs/list-recommendations?key=484129036&locale=en-US"
        name="Recommendations"
      />
    </section>
  );
};

export default Home;
