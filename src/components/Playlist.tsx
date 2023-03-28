import { SongData } from "./Song";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
import Song from "./Song";
import { nanoid } from "nanoid";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePlaylists } from "../context/PlaylistsProvider";

type PlaylistProps = {
  name: string;
  songs: SongData[];
};

const Playlist = (props: PlaylistProps) => {
  const { name, songs } = props;
  /* -------------------------------- */
  const { setPlaylistsNames } = usePlaylists();
  /* ------------- draggable scroll ------------------- */
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  /* ------------- elems ------------------- */
  const songElems = songs?.map((song) => <Song song={song} key={nanoid()} />);
  /* ------------- handlers ------------------- */
  const clickHandler = () => {
    setPlaylistsNames((old) => old.filter((p) => p !== name));
  };
  return (
    <div className="album-list">
      <div className="headline-cont">
        <h3>{name}</h3>
        <div className="line"></div>
        <div className="conrolers-cont">
          <FontAwesomeIcon icon={faTrashCan} onClick={clickHandler} />
        </div>
      </div>
      <div className="albums-cont" id="new-releases" ref={ref} {...events}>
        {songElems}
      </div>
    </div>
  );
};

export default Playlist;
