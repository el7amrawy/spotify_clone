import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

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
  /* ------------- states ------------------- */
  const [favourite, setFavourite] = useState(false);
  /* -------------------------------- */
  const ref = useRef(null);
  /* ------------- effects ------------------- */
  useEffect(() => {
    if (favourite) {
      (ref.current as unknown as HTMLElement).classList.remove("hidden");
    } else {
      (ref.current as unknown as HTMLElement).classList.add("hidden");
    }
  }, [favourite]);
  return (
    <div className="song">
      <FontAwesomeIcon
        icon={faHeart}
        onClick={() => setFavourite(!favourite)}
        style={{ color: favourite ? "red" : "var(--primary)" }}
        ref={ref}
      />
      <div>
        <img src={song.images.coverart} />
      </div>
      <h4>{song.title}</h4>
    </div>
  );
};
export default Song;
