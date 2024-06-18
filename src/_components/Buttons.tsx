import {
  IconBookmarkFilled,
  IconBookmark,
  IconHeartFilled,
  IconHeart,
  IconLogout2,
} from "@tabler/icons-react";
import { addFavorite, addWatchlist } from "../_handlers/addAndDeleteMovies";
import { useLocalStorage } from "../_lib/hooks";
import { useNavigate } from "react-router-dom";
import { getFavorite, getWatchlist } from "../_handlers/getMovies";

export const ButtonLogout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.setItem("account_id", "");
    localStorage.setItem("request_token", "");
    localStorage.setItem("access_token", "");
    await getFavorite();
    await getWatchlist();

    return navigate(`/`);
  };

  const getCurrentToken = localStorage.getItem("request_token");
  const getCurrentAccessToken = localStorage.getItem("access_token");

  if (getCurrentToken && getCurrentAccessToken)
    return (
      <button onClick={handleLogout}>
        <IconLogout2 />
      </button>
    );
};

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
