import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import FavouriteSongsProvider from "../context/FavouriteSongsProvider";

const RootPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, []);
  return (
    <FavouriteSongsProvider>
      <main>
        <SideBar />
        <Outlet />
      </main>
    </FavouriteSongsProvider>
  );
};
export default RootPage;
