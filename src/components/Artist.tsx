export type ArtistData = {
  adamid: string;
  name: string;
  avatar: string;
};

type ArtistProps = {
  artist: ArtistData;
};

const Artist = (props: ArtistProps) => {
  const { artist } = props;
  return (
    <div className="song">
      <div>
        <img src={artist.avatar} />
      </div>
      <h4>{artist.name}</h4>
    </div>
  );
};
export default Artist;
