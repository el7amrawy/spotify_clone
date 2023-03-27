import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Song from "./Song";
import axios from "axios";
import config from "../config";

// types
type Img = {
  background: string;
  coverart: string;
};

export type SongData = {
  key: string;
  title: string;
  images: Img;
};

type AlbumListProps = {
  url: string;
  name: string;
};

const SongsList = (props: AlbumListProps) => {
  const { url, name } = props;
  /* ---------------- states ---------------- */
  const [albums, setAlbums] = useState([] as unknown as SongData[]);
  /* ---------------- effects ---------------- */
  useEffect(() => {
    axios
      .get(config.api + url, {
        headers: config.headers,
      })
      .then(({ data }) => {
        const songs: SongData[] = data.tracks;
        setAlbums(songs);
      }).catch(err=>{
        console.error(err)
      });
  }, []);
  /* ------------- draggable scroll ------------------- */
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  /* ------------- elems ------------------- */

  const songElems = albums?.map((song) => <Song song={song} key={song.key} />);
  return (
    <div className="album-list">
      <div className="headline-cont">
        <h3>{name}</h3>
        <div className="line"></div>
        <div className="conrolers-cont">
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={() => {
              const elem = ref.current as HTMLElement;
              elem.scrollLeft -= 100;
            }}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={() => {
              const elem = ref.current as HTMLElement;
              elem.scrollLeft += 100;
            }}
          />
        </div>
      </div>
      <div className="albums-cont" id="new-releases" ref={ref} {...events}>
        {songElems}
      </div>
    </div>
  );
};

export default SongsList;
