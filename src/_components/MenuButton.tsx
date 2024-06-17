import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SerachBar";

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sm:hidden">
      <button className="flex items-center">
        <IconMenu2
          onClick={() => setMenuOpen(!menuOpen)}
          size={35}
          color="white"
        />
      </button>
      <div
        className={`bg-[#0EA5E9] ${
          menuOpen ? "w-[100vw]" : "w-0"
        } absolute transition-all right-0`}
      >
        <div className="flex flex-col py-3">
          <div className="flex px-10 py-3">
            <SearchBar closeMenu={() => setMenuOpen(!menuOpen)} />
          </div>
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            to={"favorite"}
            className="text-[#FFFFFF] text-[20px] px-10 py-3 active:bg-white active:text-[#0EA5E9]"
          >
            Favorite
          </Link>
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            to={"watchlist"}
            className="text-[#FFFFFF] text-[20px] px-10 py-3 active:bg-white active:text-[#0EA5E9]"
          >
            Watchlist
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MenuButton;
