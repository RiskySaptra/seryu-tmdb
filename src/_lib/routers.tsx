import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import {
  getNowPlaying,
  getTopRated,
  getMovieDetails,
  getMovieRecommendations,
  getFavorite,
  getWatchlist,
  searchMovie,
} from "../_handlers/getMovies.ts";

import Layout from "../_components/Layout.tsx";
import ErrorPage from "../_components/ErrorPage.tsx";

const ProtectedRoutes = () => {
  // TODO: Use authentication token
  const localStorageToken = localStorage.getItem("access_token");

  return localStorageToken ? <Outlet /> : <Navigate to="/" replace />;
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        async lazy() {
          let Homepage = await import("../screens/Homepage.tsx");
          return { Component: Homepage.default };
        },
        loader: async () => {
          const now_playing = await getNowPlaying();
          const top_rated = await getTopRated();
          return { now_playing, top_rated };
        },
      },
      {
        path: "/search/:query?",
        async lazy() {
          let SearchResult = await import("../screens/SearchResult.tsx");
          return { Component: SearchResult.default };
        },
        loader: async ({ params }: any) => {
          const searchResult = await searchMovie(params.query);
          return searchResult;
        },
      },
      {
        path: "/:movieId",
        async lazy() {
          let MovieDetails = await import("../screens/MovieDetails.tsx");
          return { Component: MovieDetails.default };
        },
        loader: async ({ params }: any) => {
          const movieDetail = await getMovieDetails(params.movieId);
          const movieRecomendations = await getMovieRecommendations(
            params.movieId
          );

          return { movieDetail, movieRecomendations };
        },
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "favorite",
            async lazy() {
              let Favorite = await import("../screens/Favorite.tsx");
              return { Component: Favorite.default };
            },
            loader: async () => {
              const favorites = await getFavorite();
              return favorites;
            },
          },
          {
            path: "watchlist",
            async lazy() {
              let Watchlist = await import("../screens/Watchlist.tsx");
              return { Component: Watchlist.default };
            },
            loader: async () => {
              const watchlist = await getWatchlist();
              return watchlist;
            },
          },
        ],
      },
    ],
  },
]);
