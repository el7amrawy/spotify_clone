import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  useContext,
} from "react";

type PlaylistsProviderProviderProps = {
  children: ReactNode;
};

type PlaylistsProviderContext = {
  togglePlaylist: boolean;
  setTogglePlaylist: Dispatch<React.SetStateAction<boolean>>;
};

const PlaylistsProviderContext = createContext({} as PlaylistsProviderContext);

export const useTogglePlaylist = () => useContext(PlaylistsProviderContext);

const PlaylistsProvider = (props: PlaylistsProviderProviderProps) => {
  const { children } = props;
  const [togglePlaylist, setTogglePlaylist] = useState(false);
  return (
    <PlaylistsProviderContext.Provider
      value={{ togglePlaylist, setTogglePlaylist }}
    >
      {children}
    </PlaylistsProviderContext.Provider>
  );
};

export default PlaylistsProvider;
