import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { FavoriteButton, WatchlistButton } from "./Buttons";
import { useDoubleTap } from "use-double-tap";
import { useLocalStorage } from "../_lib/hooks";
import { addFavorite } from "../_handlers/addAndDeleteMovies";

const MovieCards = (itm: any) => {
  const navigate = useNavigate();
  const [state, setStorage] = useLocalStorage("favorites");
  const bind = useDoubleTap(
    () => {
      const isInFavorites = state[itm.id];
      addFavorite(itm.id, !isInFavorites).then(() => {
        setStorage(itm.id, isInFavorites);
      });
    },
    300,
    {
      onSingleTap: () => {
        navigate(`/${itm.id}`);
      },
    }
  );
  return (
    <div
      {...bind}
      className="min-w-[200px] h-[370px] bg-[#050E12] rounded-lg snap-center group cursor-pointer"
    >
      <div className="relative bg-[url('/tube-spinner.svg')] bg-no-repeat bg-center bg-contain">
        <img
          src={`https://image.tmdb.org/t/p/w300${itm.poster_path}`}
          className="rounded-t-lg"
          alt={"Poster " + itm.title + " Movie"}
          width="200"
          key={itm.id}
          height="300"
          loading="lazy"
        />
        <div className="absolute bottom-2 gap-1 right-2 flex">
          <WatchlistButton
            className="hidden group-hover:inline"
            movieId={itm.id}
          />
          <FavoriteButton
            storageState={[state, setStorage]}
            className="hidden group-hover:inline"
            movieId={itm.id}
          />
        </div>
      </div>

      <div className="px-5 pt-3">
        <p className="truncate text-[#B6B6B6] text-[18px] font-bold group-hover:text-white font-inter">
          {itm.title}
        </p>
        <p className="truncate text-[#828282] text-[12px] font-inter">
          {format(new Date(itm.release_date), "yyyy")}
        </p>
      </div>
    </div>
  );
};

export default MovieCards;
