import { SyntheticEvent, useRef, useState } from "react";
import { useChosedSong } from "../context/ChosedSongProvider";
import { usePlaylists } from "../context/PlaylistsProvider";
import { SongData } from "./Song";

const AddToPlaylist = () => {
  /* ---------------- states ---------------- */
  const [playlistName, setPlaylistName] = useState("");
  const [chosedPlaylists, setChosedPlaylists] = useState([] as Array<string>);

  /* -------------------------------- */
  const {
    setTogglePlaylist,
    playlistsNames,
    setPlaylistsNames,
    playlists,
    setPlaylists,
  } = usePlaylists();

  const { chosedSong } = useChosedSong();
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

    const playlist = playlists[
      target.innerText as keyof Object
    ] as unknown as SongData[];

    if (chosedPlaylists.find((p) => p === target.innerText)) {
      setChosedPlaylists(chosedPlaylists.filter((p) => p !== target.innerText));
      target.classList.remove("chosed-list");

      //   remove song from playlist
      setPlaylists({
        ...playlists,
        [target.innerText]: playlist.filter((p) => p.key !== chosedSong.key),
      });
    } else {
      setChosedPlaylists([...chosedPlaylists, target.innerText]);
      target.classList.add("chosed-list");

      //   add song to playlist
      setPlaylists({
        ...playlists,
        [target.innerText]: [...playlist, chosedSong],
      });
    }
  };
  /* ---------------- elems ---------------- */
  const liElems = playlistsNames.map((p) => (
    <li
      onClick={playListClickHandler}
      key={p}
      className={
        (playlists[p as keyof Object] as unknown as SongData[]).find(
          (x) => x.key === chosedSong.key
        )
          ? "chosed-list"
          : ""
      }
    >
      {p}
    </li>
  ));

  return (
    <div className="add-playlist-cont" onClick={clickHandler} ref={contRef}>
      <div className="add-playlist">
        {playlistsNames.length ? (
          <>
            <h3>Add the Song to a playlist</h3>
            <div className="playlists-list-cont">
              <ul>{liElems}</ul>
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
