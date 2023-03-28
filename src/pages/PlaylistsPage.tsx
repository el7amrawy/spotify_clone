import { SongData } from "../components/Song";
import SongsList from "../components/SongsList";
import { usePlaylists } from "../context/PlaylistsProvider";

const PlaylistsPage = () => {
  const { playlists, playlistsNames } = usePlaylists();
  const listElems = playlistsNames.map((name) => (
    <SongsList
      name={name}
      songs={playlists[name as keyof Object] as unknown as SongData[]}
    />
  ));
  return <section id="playlists">{listElems}</section>;
};
export default PlaylistsPage;
