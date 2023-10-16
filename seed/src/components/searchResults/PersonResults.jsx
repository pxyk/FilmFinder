import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { searchPeople } from "@/api/search/personsearchapi";
import Pagination from "@/utils/Pagination";

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
    return <p>Loading...</p>;
  }

  if (people.length === 0) {
    return <p>No people found.</p>;
  }

  return (
    <div>
      <h2>Person Results</h2>
      <p>Query: {query}</p>
      <p>Total Results: {totalResults}</p>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Link href={`/person/${person.id}`}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                  alt={`${person.name} Profile`}
                />
                <p>Known For: {person.known_for_department}</p>
              </div>
              <div>{person.name}</div>
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
