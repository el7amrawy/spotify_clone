import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
} from "react";
import { SongData } from "../components/Song";

type ChosedSongContext = {
  chosedSong: SongData;
  setChosedSong: Dispatch<React.SetStateAction<SongData>>;
};

const chosedSongContext = createContext({} as ChosedSongContext);

export const useChosedSong = () => useContext(chosedSongContext);

type ChosedSongProviderProps = {
  children: ReactNode;
};

const ChosedSongProvider = (props: ChosedSongProviderProps) => {
  const { children } = props;
  const [chosedSong, setChosedSong] = useState({} as SongData);

  return (
    <chosedSongContext.Provider value={{ chosedSong, setChosedSong }}>
      {children}
    </chosedSongContext.Provider>
  );
};

export default ChosedSongProvider;
