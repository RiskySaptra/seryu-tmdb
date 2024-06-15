import { createBrowserRouter } from "react-router-dom";
import { getNowPlaying, getTopRated } from "../_handlers/getMovies.tsx";

import App from "../App.tsx";
import Layout from "../_components/Layout.tsx";
import ErrorPage from "../_components/ErrorPage.tsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
        loader: async () => {
          const now_playing = await getNowPlaying();
          const top_rated = await getTopRated();
          return { now_playing, top_rated };
        },
      },
    ],
  },
]);
