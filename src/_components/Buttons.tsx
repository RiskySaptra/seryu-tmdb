import {
  IconBookmarkFilled,
  IconBookmark,
  IconHeartFilled,
  IconHeart,
} from "@tabler/icons-react";
import { addFavorite, addWatchlist } from "../_handlers/addAndDeleteMovies";
import { useLocalStorage } from "../_lib/hooks";

export const WatchlistButton = ({ movieId, className }: any) => {
  const [state, setStorage] = useLocalStorage("watchlist");
  const isInWatchlist = state[movieId];
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        addWatchlist(movieId, !isInWatchlist).then(() =>
          setStorage(movieId, isInWatchlist)
        );
      }}
      className={isInWatchlist ? "inline" : className}
    >
      {isInWatchlist ? (
        <IconBookmarkFilled color="white" />
      ) : (
        <IconBookmark color="white" />
      )}
    </button>
  );
};

export const FavoriteButton = ({ movieId, className }: any) => {
  const [state, setStorage] = useLocalStorage("favorites");
  const isInFavorites = state[movieId];

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        addFavorite(movieId, !isInFavorites).then(() => {
          setStorage(movieId, isInFavorites);
        });
      }}
      className={isInFavorites ? "inline" : className}
    >
      {isInFavorites ? (
        <IconHeartFilled color="white" />
      ) : (
        <IconHeart color="white" />
      )}
    </button>
  );
};
