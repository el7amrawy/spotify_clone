import { SyntheticEvent, useRef, useState } from "react";
import { usePlaylists } from "../context/PlaylistsProvider";
import { SongData } from "./Song";

type AddToPlaylistProps = {
  song: SongData;
};

const AddToPlaylist = (props: AddToPlaylistProps) => {
  const { song } = props;
  /* ---------------- states ---------------- */
  const [playlistName, setPlaylistName] = useState("");
  const [chosedPlaylists, setChosedPlaylists] = useState([] as Array<string>);

  /* -------------------------------- */
  const {
    setTogglePlaylist,
    playlistsNames,
    setPlaylistsNames,
    togglePlaylist,
  } = usePlaylists();

  /* ---------------- refs ---------------- */
  const contRef = useRef(null);

  /* ---------------- handlers ---------------- */
  const clickHandler = (ev: SyntheticEvent) => {
    if ((ev.target as HTMLElement) === contRef.current) {
      setTogglePlaylist(false);
    }
  };

  const submitHandler = (ev: SyntheticEvent) => {
    ev.preventDefault();
    if (playlistsNames.find((p) => p === playlistName)) {
      alert("Playlist already exits");
    } else {
      setPlaylistsNames([...playlistsNames, playlistName]);
      setPlaylistName("");
    }
  };

  const playListClickHandler = (ev: SyntheticEvent) => {
    const target = ev.target as HTMLElement;
    if (chosedPlaylists.find((p) => p === target.innerText)) {
      setChosedPlaylists(chosedPlaylists.filter((p) => p !== target.innerText));
      target.classList.remove("chosed-list");
    } else {
      setChosedPlaylists([...chosedPlaylists, target.innerText]);
      target.classList.add("chosed-list");
    }
  };

  return (
    <div className="add-playlist-cont" onClick={clickHandler} ref={contRef}>
      <div className="add-playlist">
        {playlistsNames.length ? (
          <>
            <h3>Add the Song to a playlist</h3>
            <div className="playlists-list-cont">
              <ul>
                {playlistsNames.map((p) => (
                  <li onClick={playListClickHandler} key={p}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
        <h3>Create a Playlist</h3>
        <form onSubmit={submitHandler}>
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
