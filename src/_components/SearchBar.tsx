import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ closeMenu }: any) => {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState("");
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    if (searchParam) {
      navigate(`/search/${searchParam}`);
      setSearchParam("");
      closeMenu();
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div className="border rounded overflow-hidden flex ">
        <input
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="px-4 py-1 w-[300px] sm:max-w-[100px] sm:focus:max-w-[200px] transition-all text-black "
          placeholder="Search..."
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 border-l"
        >
          <svg
            className="h-3 w-3 text-grey-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
