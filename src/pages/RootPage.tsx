import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import FavouriteSongsProvider from "../context/FavouriteSongsProvider";
import PlaylistsProvider from "../context/PlaylistsProvider";
import ChosedSongProvider from "../context/ChosedSongProvider";
import useAuth from "../hooks/useAuth";

const RootPage = () => {
  return useAuth() ? (
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
  ) : (
    "login"
  );
};
export default RootPage;
