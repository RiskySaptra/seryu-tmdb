import {
  IconBookmarkFilled,
  IconBookmark,
  IconHeartFilled,
  IconHeart,
} from "@tabler/icons-react";
import { isWatchlist, isFavorites } from "../_lib/helpers";

export const WatchlistButton = ({ movieId, className }: any) => {
  const isInWatchlist = isWatchlist(movieId);
  return (
    <button className={isInWatchlist ? "inline" : className}>
      {isInWatchlist ? (
        <IconBookmarkFilled color="white" />
      ) : (
        <IconBookmark color="white" />
      )}
    </button>
  );
};

export const FavoriteButton = ({ movieId, className }: any) => {
  const isInFavorites = isFavorites(movieId);

  return (
    <button className={isInFavorites ? "inline" : className}>
      {isInFavorites ? (
        <IconHeartFilled color="white" />
      ) : (
        <IconHeart color="white" />
      )}
    </button>
  );
};
