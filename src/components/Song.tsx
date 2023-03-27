type Img = {
  background: string;
  coverart: string;
};

export type SongData = {
  key: string;
  title: string;
  images: Img;
};

type SongProps = {
  song: SongData;
};

const Song = (props: SongProps) => {
  const { song } = props;
  return (
    <div className="song">
      <div>
        <img src={song.images.coverart} />
      </div>
      <h4>{song.title}</h4>
    </div>
  );
};
export default Song;
