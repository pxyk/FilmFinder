import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "@/features/searchSlice";
import { useRouter } from "next/router";

const ResultSearchBar = () => {
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

    router.push(`/result?query=${searchQuery}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <input
        type="text"
        placeholder="Search for a movie and person..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="text-black p-2 rounded-l-lg w-72 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-red-500 text-white p-2 rounded-r-lg"
      >
        Search
      </button>
    </div>
  );
};

export default ResultSearchBar;