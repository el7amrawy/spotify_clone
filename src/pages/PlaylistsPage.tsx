import { SongData } from "../components/Song";
import { usePlaylists } from "../context/PlaylistsProvider";
import Playlist from "../components/Playlist";

const PlaylistsPage = () => {
  const { playlists, playlistsNames } = usePlaylists();
  const listElems = playlistsNames.map((name) => (
    <Playlist
      name={name}
      songs={playlists[name as keyof Object] as unknown as SongData[]}
    />
  ));
  return (
    <section id="playlists">
      {playlistsNames.length ? listElems : "You don't have any playlists"}
    </section>
  );
};
export default PlaylistsPage;
