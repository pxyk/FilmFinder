import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "@/features/searchSlice";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const router = useRouter();

  const handleSearch = () => {
    // Check if the search query is empty
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
      return;
    }

    // Dispatch the search query to the Redux store
    dispatch(setQuery(searchQuery));

    // Navigate to the search result page with the query as a parameter
    router.push(`/result?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleKeyDown = (event) => {
    // Handle search when Enter key is pressed
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center max-w-3xl mx-auto"
    >
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
    </motion.div>
  );
};

export default SearchBar;
