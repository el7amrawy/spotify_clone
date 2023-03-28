import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import FavouriteSongsProvider from "../context/FavouriteSongsProvider";
import PlaylistsProvider from "../context/PlaylistsProvider";
import ChosedSongProvider from "../context/ChosedSongProvider";

const RootPage = () => {
  return (
    <FavouriteSongsProvider>
      <PlaylistsProvider>
        <ChosedSongProvider>
          <main>
            <SideBar />
            <Outlet />
          </main>
        </ChosedSongProvider>
      </PlaylistsProvider>
    </FavouriteSongsProvider>
  );
};
export default RootPage;
