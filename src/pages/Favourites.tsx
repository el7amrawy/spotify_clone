import SongsList from "../components/SongsList";
import { useFavouriteSongsContext } from "../context/FavouriteSongsProvider";

const Favourites = () => {
  const { favouriteSongs } = useFavouriteSongsContext();
  return (
    <section id="favourites">
      {favouriteSongs.length ? (
        <SongsList name="Your Favourite Songs" songs={favouriteSongs} />
      ) : (
        <div>You don't have any favourite songs</div>
      )}
    </section>
  );
};
export default Favourites;
