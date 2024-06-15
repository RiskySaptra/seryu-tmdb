import { useLoaderData } from "react-router-dom";
import MovieCards from "../_components/MovieCards";

function Homepage() {
  const data: any = useLoaderData();
  const { now_playing, top_rated } = data;

  return (
    <div className="container mx-auto sm:px-0 px-5 ">
      <div className="sm:pt-10 pt-5">
        <h1 className="sm:text-[48px] text-[28px] font-poppins font-semibold">
          Now Playing
        </h1>
        <div className="pb-5 flex overflow-x-scroll gap-5 snap-x">
          {now_playing.results.map((itm: any, idx: number) => (
            <MovieCards key={idx} {...itm} />
          ))}
        </div>
      </div>
      <div className="sm:pt-10 pt-5">
        <h1 className="sm:text-[48px] text-[28px] font-poppins font-semibold">
          Top Rated
        </h1>
        <div className="h-[740px] bg-gray-100">
          <p className="">list</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
