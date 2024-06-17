import { useLoaderData } from "react-router-dom";
import GridMovieCard from "../_components/GridMovieCard";

const Watchlist = () => {
  const data: any = useLoaderData();

  return (
    <div className="container mx-auto xl:px-0 px-3">
      <div className="sm:pt-10 pt-5">
        <h1 className="sm:text-[48px] text-[28px] font-poppins font-semibold mb-3">
          Your Watchlist
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 sm:gap-5 gap-3">
          {data.results.map((itm: any, idx: number) => {
            if (itm.poster_path) return <GridMovieCard key={idx} {...itm} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
