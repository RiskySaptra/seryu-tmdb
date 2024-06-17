import { clientInstance } from "../_lib/axios-client";
import { setItemToLocalStorage } from "../_lib/helpers";

export async function getNowPlaying() {
  const { data }: any = await clientInstance.get(
    `/movie/now_playing?language=en-US&page=1`
  );
  return data;
}

export async function getTopRated() {
  const { data }: any = await clientInstance.get(
    `/movie/top_rated?language=en-US&page=1`
  );
  return data;
}

export async function getMovieRecommendations(movieId: string) {
  const { data }: any = await clientInstance.get(
    `/movie/${movieId}/recommendations`
  );
  return data;
}

export async function getMovieDetails(movieId: string) {
  const { data }: any = await clientInstance.get(`/movie/${movieId}`);
  return data;
}

export async function getFavorite() {
  const { data }: any = await clientInstance.get(
    `/account/10101570/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`
  );
  setItemToLocalStorage(data.results, "favorites");
  return data;
}

export async function getWatchlist() {
  const { data }: any = await clientInstance.get(
    `/account/10101570/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`
  );
  setItemToLocalStorage(data.results, "watchlist");
  return data;
}
