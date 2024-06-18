import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { ButtonLogout } from "./Buttons";

const MenuButton = ({ openModal }: any) => {
  const currentToken = localStorage.getItem("request_token");
  const currentAccessToken = localStorage.getItem("access_token");
  const navigate = useNavigate();

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
          <button
            onClick={() => {
              if (currentToken && currentAccessToken) {
                navigate("/favorite");
                setMenuOpen(!menuOpen);
              } else {
                openModal();
              }
            }}
            className="text-[#FFFFFF] text-[20px] px-10 py-3 active:bg-white active:text-[#0EA5E9]"
          >
            Favorite
          </button>
          <button
            onClick={() => {
              if (currentToken && currentAccessToken) {
                navigate("/watchlist");
                setMenuOpen(!menuOpen);
              } else {
                openModal();
              }
            }}
            className="text-[#FFFFFF] text-[20px] px-10 py-3 active:bg-white active:text-[#0EA5E9]"
          >
            Watchlist
          </button>
          <div className="flex px-10 py-3">
            <ButtonLogout />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuButton;
