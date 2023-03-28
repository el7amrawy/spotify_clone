import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  useContext,
  useEffect,
} from "react";

type PlaylistsProviderProviderProps = {
  children: ReactNode;
};

type PlaylistsProviderContext = {
  togglePlaylist: boolean;
  setTogglePlaylist: Dispatch<React.SetStateAction<boolean>>;
  playlistsNames: string[];
  setPlaylistsNames: Dispatch<React.SetStateAction<string[]>>;
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
  /* ---------------- effects ---------------- */
  useEffect(() => {
    localStorage.setItem("playlistsNames", JSON.stringify(playlistsNames));
  }, [playlistsNames]);

  return (
    <PlaylistsProviderContext.Provider
      value={{
        togglePlaylist,
        setTogglePlaylist,
        playlistsNames: playlistsNames,
        setPlaylistsNames: setPlaylistsNames,
      }}
    >
      {children}
    </PlaylistsProviderContext.Provider>
  );
};

export default PlaylistsProvider;
