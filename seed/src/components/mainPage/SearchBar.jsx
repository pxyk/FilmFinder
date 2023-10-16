import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "@/features/searchSlice";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
      return;
    }

    dispatch(setQuery(searchQuery));

    router.push(`/result?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Search for a movie and person..."
        className="text-black p-2 w-72 rounded-l-lg focus:outline-none sm:w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearch}
        className="bg-red-500 text-white p-2 px-6 rounded-r-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
