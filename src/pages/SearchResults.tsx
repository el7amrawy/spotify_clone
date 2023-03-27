import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongData } from "../components/Song";
import SongsList from "../components/SongsList";
import config from "../config";

type ArtistData = {
  adamid: string;
  name: string;
  avatar: string;
};

const SearchResults = () => {
  const { string } = useParams();

  const [songs, setSongs] = useState([] as SongData[]);
  const [artists, setArtists] = useState([] as ArtistData[]);
  useEffect(() => {
    axios
      .get(config.api + "/search", {
        headers: config.headers,
        params: {
          term: string,
          locale: "en-US",
          offset: "0",
          limit: "15",
        },
      })
      .then(({ data }) => {
        const songs: SongData[] = data.tracks.hits?.map(
          (hit: { track: any }) => hit.track
        );
        setArtists(data.artists.hits);
        setSongs(songs);
      });
  }, []);
  console.log(songs);

  return (
    <section id="search-results">
      {songs.length ? <SongsList songs={songs} name="Songs" /> : null}
    </section>
  );
};

export default SearchResults;
