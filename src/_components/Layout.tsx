import { IconMenu2 } from "@tabler/icons-react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import useInterval from "use-interval";
import { useWindowFocus } from "../_lib/hooks";
import { getFavorite, getWatchlist } from "../_handlers/getMovies";

const Layout = () => {
  // const revalidator = useRevalidator();
  const { state } = useNavigation();
  const isWindowFocus = useWindowFocus();
  const isLoading = state === "loading";

  // sync localstorage every 2 mins
  useInterval(
    async () => {
      if (isWindowFocus) {
        await getFavorite();
        await getWatchlist();
        console.log("sync local storage", isWindowFocus);
      }
    },
    1000 * 120,
    true
  );

  return (
    <div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-30 flex justify-center items-center">
          <div className="z-10 w-[100px] h-[100px] bg-[url('/ripples.svg')] bg-no-repeat bg-center bg-contain" />
        </div>
      )}
      {/* {revalidator.state === "loading" && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-30 flex justify-center items-center">
          <div className="z-10 w-[100px] h-[100px] bg-[url('/ripples.svg')] bg-no-repeat bg-center bg-contain" />
          Sync
        </div>
      )} */}
      <div className="bg-[#0EA5E9] fixed w-full z-20">
        <div className="container mx-auto xl:px-0 px-4">
          <div className="sm:h-[100px] h-[60px] flex justify-between items-center flex-row">
            <Link
              to={"/"}
              className="text-[#FFFFFF] sm:text-[48px] text-[34px] sm:tracking-[20px] tracking-[15px] font-extrabold font-poppins"
            >
              CINEMA
            </Link>
            <div className="hidden sm:flex gap-5">
              <Link to={"favorite"} className="text-[#FFFFFF] text-[20px]">
                Favorite
              </Link>
              <Link to={"watchlist"} className="text-[#FFFFFF] text-[20px]">
                Watchlist
              </Link>
            </div>
            <div className="sm:hidden">
              <button className="flex items-center">
                <IconMenu2 size={35} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:pt-[100px] pt-[60px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
