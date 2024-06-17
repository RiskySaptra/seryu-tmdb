import { useLoaderData } from "react-router-dom";
import MovieCards from "../_components/MovieCards";
import GridMovieCard from "../_components/GridMovieCard";

function Homepage() {
  const data: any = useLoaderData();
  const { now_playing, top_rated } = data;

  return (
    <div className="container mx-auto xl:px-0 px-3">
      <div className="sm:pt-10 pt-5">
        <h1 className="sm:text-[48px] text-[28px] font-poppins font-semibold mb-3">
          Now Playing
        </h1>
        <div className="pb-5 flex overflow-x-scroll gap-5 snap-x">
          {now_playing.results.map((itm: any, idx: number) => (
            <MovieCards key={idx} {...itm} />
          ))}
        </div>
      </div>
      <div className="sm:pt-10 pt-5">
        <h1 className="sm:text-[48px] text-[28px] font-poppins font-semibold mb-3">
          Top Rated
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 sm:gap-5 gap-3">
          {top_rated.results.map((itm: any, idx: number) => (
            <GridMovieCard key={idx} {...itm} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
