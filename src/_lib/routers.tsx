import { createBrowserRouter } from "react-router-dom";
import {
  getNowPlaying,
  getTopRated,
  getMovieDetails,
  getMovieRecommendations,
} from "../_handlers/getMovies.ts";

import Layout from "../_components/Layout.tsx";
import ErrorPage from "../_components/ErrorPage.tsx";
import Homepage from "../screens/Homepage.tsx";
import MovieDetails from "../screens/MovieDetails.tsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: async () => {
          const now_playing = await getNowPlaying();
          const top_rated = await getTopRated();
          return { now_playing, top_rated };
        },
      },
      {
        path: "/:movieId",
        element: <MovieDetails />,
        loader: async ({ params }: any) => {
          const movieDetail = await getMovieDetails(params.movieId);
          const movieRecomendations = await getMovieRecommendations(
            params.movieId
          );
          return { movieDetail, movieRecomendations };
        },
      },
      {
        path: "favorite",
        element: <p className="">Favorite</p>,
      },
      {
        path: "watchlist",
        element: <p className="">Watchlist</p>,
      },
    ],
  },
]);
