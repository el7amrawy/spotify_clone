import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import FavouriteSongsProvider from "../context/FavouriteSongsProvider";
import PlaylistsProvider from "../context/PlaylistsProvider";

const RootPage = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("home");
  // }, []);
  return (
    <FavouriteSongsProvider>
      <PlaylistsProvider>
        <main>
          <SideBar />
          <Outlet />
        </main>
      </PlaylistsProvider>
    </FavouriteSongsProvider>
  );
};
export default RootPage;
