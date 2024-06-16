import { useLoaderData, useNavigation } from "react-router-dom";
import { format } from "date-fns";
import "react-circular-progressbar/dist/styles.css";
import { IconBookmark, IconCircleFilled, IconStar } from "@tabler/icons-react";
import {
  arrayToString,
  calculatePercentage,
  minutesToHoursAndMinutes,
} from "../_lib/helpers";
import { CircularProgressbar } from "react-circular-progressbar";
import MovieCards from "../_components/MovieCards";

const MovieDetails = () => {
  const data: any = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const { movieDetail, movieRecomendations } = data;

  return (
    <div className="container mx-auto xl:px-0 px-3">
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-30">
          <div className="fixed top-5 right-5 z-10 w-[50px] h-[50px] bg-[url('/ripples.svg')] bg-no-repeat bg-center bg-contain" />
        </div>
      )}
      <div>
        <img
          src={`${
            !movieDetail.backdrop_path
              ? `https://media.themoviedb.org/t/p/w500_and_h225_multi_faces_filter(blur)${movieDetail.poster_path}`
              : `https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`
          }`}
          className="absolute sm:top-[100px] top-[60px] left-0 -z-10 sm:h-[430px] min-h-[250px] w-full object-cover"
          key={movieDetail.id}
          alt={"Cover " + movieDetail.title + " Movie"}
          loading="lazy"
          fetchPriority="high"
        />
        <div className="sm:h-[430px] w-full bg-black/40 absolute sm:top-[100px] top-[60px] left-0 -z-10" />
      </div>

      <div className="sm:pt-16 pt-8 flex sm:flex-row flex-col sm:gap-10 gap-5">
        <div
          className={`${
            !movieDetail.backdrop_path ? "flex justify-center" : ""
          }`}
        >
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`}
            className="rounded-lg sm:min-w-[200px] w-[120px] bg-[url('/tube-spinner.svg')] bg-no-repeat bg-center bg-contain"
            alt={"Poster " + movieDetail.title + " Movie"}
            key={movieDetail.id}
            width="200"
            height="300"
            loading="lazy"
          />
        </div>
        <div className="pt-8 flex flex-col gap-3">
          <p className="sm:text-[32px] text-[22.5px] sm:text-left text-center font-bold font-poppins">
            {movieDetail.title}{" "}
            <span className="font-normal">
              ({format(new Date(movieDetail.release_date), "yyyy")})
            </span>
          </p>
          <div className="hidden sm:flex items-center gap-2">
            <p className="text-[14px]">
              {format(new Date(movieDetail.release_date), "MM/dd/yyyy")}
            </p>
            <IconCircleFilled className="inline" size={5} />
            <p className="text-[14px]">
              {arrayToString(movieDetail.genres, "name")}
            </p>
            <IconCircleFilled className="inline" size={5} />
            <p className="text-[14px]">
              {minutesToHoursAndMinutes(movieDetail.runtime)}
            </p>
          </div>

          <div className="sm:hidden flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <p className="text-[14px]">
                {format(new Date(movieDetail.release_date), "MM/dd/yyyy")}
              </p>
              <IconCircleFilled className="inline" size={5} />
              <p className="text-[14px]">
                {minutesToHoursAndMinutes(movieDetail.runtime)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[14px]">
                {arrayToString(movieDetail.genres, "name")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 relative my-1">
            <div className="flex items-center gap-2">
              <div className="w-[35px] h-[35px] bg-white rounded-full p-[3px]">
                <CircularProgressbar
                  value={movieDetail.vote_average}
                  maxValue={10}
                  strokeWidth={12}
                />
                <p className="absolute top-[11px] left-[11.5px] text-[10px] font-semibold text-[#3e98c7]">
                  {calculatePercentage(movieDetail.vote_average, 10)}
                </p>
              </div>
              <div>
                <p className="text-[8px] leading-tight">User</p>
                <p className="text-[8px] leading-tight">Score</p>
              </div>
            </div>

            <div className="flex gap-1">
              <IconBookmark color="white" />
              <IconStar color="white" />
            </div>
          </div>

          <p
            className={`${
              !movieDetail.tagline ? "hidden" : ""
            } text-[14px] italic`}
          >
            {movieDetail.tagline}
          </p>

          <div>
            <p className="text-[14px] font-bold">Overview</p>
            <p className="text-[14px]">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
      <div className="sm:mt-[100px] mt-[60px] mb-10">
        <h1 className="sm:text-[20px] text-[15px] font-poppins font-semibold pb-5">
          Recommendations
        </h1>
        <div className="pb-5 flex overflow-x-scroll gap-5 snap-x">
          {movieRecomendations.results.map((itm: any, idx: number) => {
            if (itm.poster_path) return <MovieCards key={idx} {...itm} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
