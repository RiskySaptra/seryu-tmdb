import { clientInstance } from "../_lib/axios-client";
import { getWatchlist, getFavorite } from "./getMovies";

export async function addWatchlist(movieId: number, isWatchlist: boolean) {
  await clientInstance.post(`/account/10101570/watchlist`, {
    media_type: "movie",
    media_id: movieId,
    watchlist: isWatchlist,
  });
  return getWatchlist();
}

export async function addFavorite(movieId: number, isFavorite: boolean) {
  await clientInstance.post(`/account/10101570/favorite`, {
    media_type: "movie",
    media_id: movieId,
    favorite: isFavorite,
  });

  return getFavorite();
}
