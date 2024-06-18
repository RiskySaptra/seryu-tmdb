import { clientInstance } from "../_lib/axios-client";
import { setBulkItemToLocalStorage } from "../_lib/helpers";

export async function searchMovie(query: string) {
  if (!query) {
    throw new Error("Not Allowed");
  }
  const { data }: any = await clientInstance.get(
    `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data;
}

export async function getNowPlaying() {
  const { data }: any = await clientInstance.get(
    `/3/movie/now_playing?language=en-US&page=1`
  );
  return data;
}

export async function getTopRated() {
  const { data }: any = await clientInstance.get(
    `/3/movie/top_rated?language=en-US&page=1`
  );
  return data;
}

export async function getMovieRecommendations(movieId: string) {
  const { data }: any = await clientInstance.get(
    `/3/movie/${movieId}/recommendations`
  );
  return data;
}

export async function getMovieDetails(movieId: string) {
  const { data }: any = await clientInstance.get(`/3/movie/${movieId}`);
  return data;
}

export async function getFavorite() {
  const { data }: any = await clientInstance.get(
    `/3/account/${
      import.meta.env.VITE_TMDB_API_ACC_ID
    }/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`
  );
  setBulkItemToLocalStorage(data.results, "favorites");
  return data;
}

export async function getWatchlist() {
  const { data }: any = await clientInstance.get(
    `/3/account/${
      import.meta.env.VITE_TMDB_API_ACC_ID
    }/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`
  );
  setBulkItemToLocalStorage(data.results, "watchlist");
  return data;
}
