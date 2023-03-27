import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
import { SongData } from "../components/Song";

type FavouriteSongsProviderProps = {
  children: ReactNode;
};

type FavouriteSongsContext = {
  favouriteSongs: SongData[];
  setFavouriteSongs: Dispatch<React.SetStateAction<SongData[]>>;
};

const favouriteSongsContext = createContext({} as FavouriteSongsContext);

export const useFavouriteSongsContext = () => useContext(favouriteSongsContext);

const FavouriteSongsProvider = (props: FavouriteSongsProviderProps) => {
  const { children } = props;
  const [favouriteSongs, setFavouriteSongs] = useState(() => {
    if (!localStorage.getItem("favouriteSongs")) {
      localStorage.setItem("favouriteSongs", "[]");
    }
    return JSON.parse(
      localStorage.getItem("favouriteSongs") as unknown as string
    ) as SongData[];
  });
  useEffect(() => {
    localStorage.setItem("favouriteSongs", JSON.stringify(favouriteSongs));
  }, [favouriteSongs]);
  return (
    <favouriteSongsContext.Provider
      value={{ favouriteSongs, setFavouriteSongs }}
    >
      {children}
    </favouriteSongsContext.Provider>
  );
};
export default FavouriteSongsProvider;
