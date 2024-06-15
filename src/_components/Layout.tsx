import { IconMenu2 } from "@tabler/icons-react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="bg-[#0EA5E9] ">
        <div className="container mx-auto sm:px-0 px-5">
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
      <Outlet />
    </div>
  );
};

export default Layout;
