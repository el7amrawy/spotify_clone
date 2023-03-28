import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  useContext,
  useEffect,
} from "react";
import { SongData } from "../components/Song";

type PlaylistsProviderProviderProps = {
  children: ReactNode;
};

type PlaylistsProviderContext = {
  togglePlaylist: boolean;
  setTogglePlaylist: Dispatch<React.SetStateAction<boolean>>;
  playlistsNames: string[];
  setPlaylistsNames: Dispatch<React.SetStateAction<string[]>>;
  playlists: Object;
  setPlaylists: Dispatch<React.SetStateAction<{}>>;
};

const PlaylistsProviderContext = createContext({} as PlaylistsProviderContext);

export const usePlaylists = () => useContext(PlaylistsProviderContext);

const PlaylistsProvider = (props: PlaylistsProviderProviderProps) => {
  const { children } = props;
  /* ---------------- states ---------------- */
  const [togglePlaylist, setTogglePlaylist] = useState(false);
  const [playlistsNames, setPlaylistsNames] = useState(() => {
    if (!localStorage.getItem("playlistsNames")) {
      localStorage.setItem("playlistsNames", "[]");
    }
    return JSON.parse(
      localStorage.getItem("playlistsNames") as string
    ) as Array<string>;
  });
  const [playlists, setPlaylists] = useState(() => {
    if (!localStorage.getItem("playlists")?.length) {
      localStorage.setItem("playlists", "{}");
    }
    return JSON.parse(localStorage.getItem("playlists") as string) as {};
  });
  /* ---------------- effects ---------------- */
  useEffect(() => {
    localStorage.setItem("playlistsNames", JSON.stringify(playlistsNames));
  }, [playlistsNames]);

  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  useEffect(() => {
    const p = JSON.parse(
      localStorage.getItem("playlists") as unknown as string
    );
    playlistsNames.forEach((pl) => {
      if (!p[pl]) {
        setPlaylists({ ...playlists, [pl]: [] as SongData[] });
      }
    });
  }, [playlistsNames]);
  return (
    <PlaylistsProviderContext.Provider
      value={{
        togglePlaylist,
        setTogglePlaylist,
        playlistsNames: playlistsNames,
        setPlaylistsNames: setPlaylistsNames,
        playlists,
        setPlaylists,
      }}
    >
      {children}
    </PlaylistsProviderContext.Provider>
  );
};

export default PlaylistsProvider;
