import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Song, { SongData } from "./Song";

// types
type AlbumListProps = {
  name: string;
  songs: SongData[];
};

const SongsList = (props: AlbumListProps) => {
  const { songs, name } = props;
  /* ------------- draggable scroll ------------------- */
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  /* ------------- elems ------------------- */

  const songElems = songs?.map((song) => <Song song={song} key={song.key} />);
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
