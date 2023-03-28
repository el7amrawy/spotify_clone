import { faHeart, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useFavouriteSongsContext } from "../context/FavouriteSongsProvider";
import { useTogglePlaylist } from "../context/PlaylistsProvider";
import AddToPlaylist from "./AddToPlaylist";

type Img = {
  background: string;
  coverart: string;
};

export type SongData = {
  key: string;
  title: string;
  images: Img;
};

type SongProps = {
  song: SongData;
};

const Song = (props: SongProps) => {
  const { song } = props;
  const { favouriteSongs, setFavouriteSongs } = useFavouriteSongsContext();
  const { setTogglePlaylist } = useTogglePlaylist();
  /* ------------- states ------------------- */
  const [favourite, setFavourite] = useState(() => {
    if (favouriteSongs.find((s) => s.key === song.key)) {
      return true;
    }
    return false;
  });
  /* -------------------------------- */
  const ref = useRef(null);
  /* ------------- effects ------------------- */
  useEffect(() => {
    if (favourite) {
      (ref.current as unknown as HTMLElement).classList.remove("hidden");
      if (!favouriteSongs.find((s) => s.key === song.key))
        setFavouriteSongs([...favouriteSongs, song]);
    } else {
      (ref.current as unknown as HTMLElement).classList.add("hidden");
      setFavouriteSongs(favouriteSongs.filter((s) => s.key !== song.key));
    }
  }, [favourite]);
  return (
    <div className="song">
      <FontAwesomeIcon
        icon={faHeart}
        onClick={() => setFavourite(!favourite)}
        style={{ color: favourite ? "red" : "var(--primary)" }}
        ref={ref}
        className="heart"
      />
      <FontAwesomeIcon
        icon={faSquarePlus}
        className="plus"
        onClick={() => setTogglePlaylist(true)}
      />
      <div>
        <img src={song.images.coverart} />
      </div>
      <h4>{song.title}</h4>
    </div>
  );
};
export default Song;
