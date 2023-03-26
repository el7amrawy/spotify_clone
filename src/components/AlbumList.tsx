import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Song from "./Song";
import axios from "axios";
import config from "../config";

// types
type Img = {
  height: number;
  width: number;
  url: string;
};

export type SongData = {
  id: string;
  name: string;
  images: Img[];
};

type AlbumListProps = {
  url: string;
  name: string;
};

const AlbumList = (props: AlbumListProps) => {
  const { url, name } = props;
  /* ---------------- states ---------------- */
  const [albums, setAlbums] = useState([] as unknown as SongData[]);
  /* ---------------- effects ---------------- */
  useEffect(() => {
    axios
      .get(config.api + url, {
        headers: {
          Authorization: config.token,
        },
      })
      .then(({ data }) => {
        // console.log(name, data);
        let songs: SongData[];
        if (name === "Featured Playlists") {
          songs = data.playlists.items;
        } else {
          songs = data.albums.items;
        }
        setAlbums(songs);
      });
  }, []);
  /* ------------- draggable scroll ------------------- */
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  /* ------------- elems ------------------- */

  const songElems = albums?.map((song) => <Song song={song} key={song.id} />);
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

export default AlbumList;
