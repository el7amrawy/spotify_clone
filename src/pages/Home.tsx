import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import AlbumList from "../components/AlbumList";

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
      <AlbumList url="/browse/new-releases?limit=20" name="New Releases" />
      <AlbumList
        url="/browse/featured-playlists?country=SE&locale=sv_SE&timestamp=2014-10-23T09%3A00%3A00&limit=20"
        name="Featured Playlists"
      />
    </section>
  );
};

export default Home;
