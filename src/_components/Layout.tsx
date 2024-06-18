import {
  Outlet,
  useNavigate,
  useNavigation,
  useRevalidator,
} from "react-router-dom";
import { useInterval, useWindowFocus } from "../_lib/hooks";
import { getFavorite, getWatchlist } from "../_handlers/getMovies";
import { useState } from "react";
import { getAccessToken, getRequestToken } from "../_handlers/auth";
import { ButtonLogout } from "./Buttons";

import MenuButton from "./MenuButton";
import SearchBar from "./SearchBar";
import Modal from "./CommonModal";

const handleGetAccessToken = async () => {
  const token: any = await getAccessToken();
  localStorage.setItem("account_id", token.account_id);
  localStorage.setItem("access_token", token.access_token);
  await getFavorite();
  await getWatchlist();
};

const handleLogin = async () => {
  const currentToken = localStorage.getItem("request_token") || "";
  if (!currentToken) {
    const token: any = await getRequestToken();
    localStorage.setItem("request_token", token.request_token);
    window.open(
      `https://www.themoviedb.org/auth/access?request_token=${token.request_token}`,
      "_blank",
      "rel=noopener noreferrer"
    );
    return;
  }

  window.open(
    `https://www.themoviedb.org/auth/access?request_token=${currentToken}`,
    "_blank",
    "rel=noopener noreferrer"
  );
};

const Layout = () => {
  const currentToken = localStorage.getItem("request_token");
  const currentAccessToken = localStorage.getItem("access_token");
  const revalidator = useRevalidator();
  const { state } = useNavigation();
  const navigate = useNavigate();
  const isWindowFocus = useWindowFocus();
  const isLoading = state === "loading";

  // Sync local storage every 2 minutes
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-30 flex justify-center items-center">
          <div className="z-10 w-[100px] h-[100px] bg-[url('/ripples.svg')] bg-no-repeat bg-center bg-contain" />
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <button
          onClick={async () => {
            if (currentToken && !currentAccessToken) {
              await handleGetAccessToken();
              revalidator.revalidate();
              closeModal();
              return;
            }
            handleLogin();
          }}
        >
          <div className="z-50 w-[160px] h-[160px] bg-[url('/TMDB.png')] bg-no-repeat bg-center bg-contain" />
          <p className="text-black text-[14px] text-center pt-3">
            {currentToken && !currentAccessToken
              ? "Get Access Token"
              : "Login with TMDB"}
          </p>
        </button>
      </Modal>
      <div className="bg-[#0EA5E9] fixed w-full z-20">
        <div className="container mx-auto xl:px-0 px-4">
          <div className="sm:h-[100px] h-[60px] flex justify-between items-center flex-row">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="text-[#FFFFFF] sm:text-[48px] text-[34px] sm:tracking-[20px] tracking-[15px] font-extrabold font-poppins"
            >
              CINEMA
            </button>
            <div className="hidden sm:flex items-center gap-5">
              <button
                onClick={() => {
                  if (currentToken && currentAccessToken) {
                    navigate("/favorite");
                  } else {
                    openModal();
                  }
                }}
                className="text-[#FFFFFF] text-[20px]"
              >
                Favorite
              </button>
              <button
                onClick={() => {
                  if (currentToken && currentAccessToken) {
                    navigate("/watchlist");
                  } else {
                    openModal();
                  }
                }}
                className="text-[#FFFFFF] text-[20px]"
              >
                Watchlist
              </button>
              <SearchBar closeMenu={() => {}} />
              <ButtonLogout />
            </div>
            <MenuButton />
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
