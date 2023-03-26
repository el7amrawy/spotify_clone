import { SongData } from "./AlbumList";

type SongProps = {
  song: SongData;
};

const Song = (props: SongProps) => {
  const { song } = props;
  // console.log(song.imgs);

  return (
    <div className="song">
      <div>
        <img src={song.images[0].url} />
      </div>
      <h4>{song.name}</h4>
    </div>
  );
};
export default Song;
