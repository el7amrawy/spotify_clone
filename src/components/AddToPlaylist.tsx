import { SyntheticEvent, useRef, useState } from "react";
import { useTogglePlaylist } from "../context/PlaylistsProvider";

const AddToPlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const { setTogglePlaylist } = useTogglePlaylist();

  const contRef = useRef(null);

  const clickHandler = (ev: SyntheticEvent) => {
    if ((ev.target as HTMLElement) === contRef.current) {
      setTogglePlaylist(false);
    }
  };

  return (
    <div className="add-playlist-cont" onClick={clickHandler} ref={contRef}>
      <div className="add-playlist">
        <h3>Create a Playlist</h3>
        <form>
          <input
            value={playlistName}
            onChange={(ev) => setPlaylistName(ev.target.value)}
            type="text"
          />
          <button>create</button>
        </form>
      </div>
    </div>
  );
};
export default AddToPlaylist;
