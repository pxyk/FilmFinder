import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { searchPeople } from "@/api/search/personsearchapi";
import Pagination from "@/components/Pagination";

const PersonResults = () => {
  const query = useSelector((state) => state.search.query);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchPeople = async (page) => {
      try {
        // Fetch people based on the query and current page
        if (query) {
          const data = await searchPeople(query, page);
          setPeople(data.results);
          setTotalPages(data.total_pages);
          setTotalResults(data.total_results);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };

    fetchPeople(currentPage);
  }, [query, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <p className="text-gray-700">Loading...</p>;
  }

  if (people.length === 0) {
    return <p className="text-gray-700">No people found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl text-red-500 font-bold mb-2">Person</h2>
      <p className="mb-2 text-gray-300">Total Results: {totalResults}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {people.map((person) => (
          <li key={person.id} className="mb-4">
            <Link href={`/person/${person.id}`}>
              <div className="flex flex-col">
                <img
                  src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                  alt={`${person.name} Profile`}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2">
                  <div className="text-white font-bold text-sm">
                    {person.name}
                  </div>
                  <p className=" text-gray-300 text-xs">
                    {person.known_for_department}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PersonResults;
