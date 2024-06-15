import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="bg-[#0EA5E9] ">
        <div className="container mx-auto sm:px-0 px-5">
          <div className="sm:h-[100px] flex justify-between items-center flex-row">
            <h1 className="text-[#FFFFFF] text-[48px] tracking-[20px] font-extrabold font-poppins">
              CINEMA
            </h1>
            <div className="hidden sm:flex gap-5">
              <a className="text-[#FFFFFF] text-[20px]">Favorite</a>
              <a className="text-[#FFFFFF] text-[20px]">Watchlist</a>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
