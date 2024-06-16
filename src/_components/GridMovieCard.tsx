import { IconBookmark, IconStar } from "@tabler/icons-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const GridMovieCard = (itm: any) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${itm.id}`)}
      className="sm:min-w-[200px] sm:h-[430px] bg-[#050E12] rounded-lg snap-center group cursor-pointer"
    >
      <div className="relative bg-[url('/tube-spinner.svg')] bg-no-repeat bg-center bg-contain">
        <img
          key={itm.id}
          src={`https://image.tmdb.org/t/p/w300${itm.poster_path}`}
          className="rounded-t-lg"
          alt={"Poster " + itm.title + " Movie"}
          width="246"
          height="300"
          loading="lazy"
        />
        <div className="absolute bottom-2 gap-1 right-2 hidden group-hover:flex">
          <IconBookmark color="white" />
          <IconStar color="white" />
        </div>
      </div>

      <div className="px-5 pt-3 pb-3">
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

export default GridMovieCard;
