import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          menuOpen ? "w-[50vw]" : "w-0"
        } absolute transition-all right-0 rounded-bl-xl`}
      >
        <div className="flex flex-col py-3">
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            to={"favorite"}
            className="text-[#FFFFFF] text-[20px] px-10 py-5 active:bg-white active:text-[#0EA5E9]"
          >
            Favorite
          </Link>
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            to={"watchlist"}
            className="text-[#FFFFFF] text-[20px] px-10 py-5 active:bg-white active:text-[#0EA5E9]"
          >
            Watchlist
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MenuButton;
