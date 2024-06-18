import { useLoaderData, useNavigate } from "react-router-dom";
import GridMovieCard from "../_components/GridMovieCard";

const Favorite = () => {
  const data: any = useLoaderData();
  const navigate = useNavigate();

  if (true) {
    navigate("/");
  }
  return (
    <div className="container mx-auto xl:px-0 px-3">
      <div className="sm:pt-10 pt-5">
        <h1 className="sm:text-[48px] text-[28px] font-poppins font-semibold mb-3">
          Your Favorite Movies
        </h1>
        {data.results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 sm:gap-5 gap-3">
            {data.results.map((itm: any, idx: number) => {
              if (itm.poster_path) return <GridMovieCard key={idx} {...itm} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center py-10">
            <p className="text-gray-500 font-bold text-[20px] sm:text-[30px]">
              No movies found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
