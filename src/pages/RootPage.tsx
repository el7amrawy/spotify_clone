import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import FavouriteSongsProvider from "../context/FavouriteSongsProvider";
import PlaylistsProvider from "../context/PlaylistsProvider";
import ChosedSongProvider from "../context/ChosedSongProvider";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, SyntheticEvent } from "react";

const RootPage = () => {
  const clickHandler = (ev: SyntheticEvent) => {
    const sideBar = document.getElementById("sidebar") as HTMLElement;
    const bars = document.getElementById("bars") as HTMLElement;
    bars.style.visibility = "hidden";
    sideBar.style.display = "flex";
  };
  return useAuth() ? (
    <FavouriteSongsProvider>
      <PlaylistsProvider>
        <ChosedSongProvider>
          <main>
            <FontAwesomeIcon icon={faBars} id="bars" onClick={clickHandler} />
            <SideBar />
            <Outlet />
          </main>
        </ChosedSongProvider>
      </PlaylistsProvider>
    </FavouriteSongsProvider>
  ) : (
    <main>
      <h1>please login</h1>
    </main>
  );
};
export default RootPage;
