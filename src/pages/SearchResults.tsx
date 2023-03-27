import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongData } from "../components/Song";
import SongsList from "../components/SongsList";
import config from "../config";
import { ArtistData } from "../components/Artist";
import ArtisitsList from "../components/ArtisitsList";

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
          (hit: { track: SongData }) => hit.track
        );
        const artists: ArtistData[] = data.artists.hits?.map(
          (hit: { artist: ArtistData }) => hit.artist
        );
        setSongs(songs);
        setArtists(artists);
      });
  }, []);

  return (
    <section id="search-results">
      {songs.length ? <SongsList songs={songs} name="Songs" /> : null}
      {artists.length ? (
        <ArtisitsList artists={artists} name="Artists" />
      ) : null}
    </section>
  );
};

export default SearchResults;
