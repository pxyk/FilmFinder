import React, { useEffect, useState } from "react";
import { fetchPersonCredits } from "@/api/person/personcreditapi";

// Function to group and sort credits by year
const groupAndSortByYear = (credits) => {
  const groupedByYear = credits.reduce((result, credit) => {
    const year = credit.release_date
      ? credit.release_date.slice(0, 4)
      : "Unknown";
    if (!result[year]) {
      result[year] = [];
    }
    result[year].push(credit);
    return result;
  }, {});

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

  sortedYears.forEach((year) => {
    groupedByYear[year].sort((a, b) => a.title.localeCompare(b.title));
  });

  return sortedYears.map((year) => ({
    year,
    credits: groupedByYear[year],
  }));
};

const PersonCredits = ({ personId }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        // Fetch person credits using the provided personId
        const creditsData = await fetchPersonCredits(personId);
        setCredits(creditsData.cast);
      } catch (error) {
        console.error("Error fetching person credits:", error);
      }
    };

    fetchCredits();
  }, [personId]);

  const groupedAndSortedCredits = groupAndSortByYear(credits);

  return (
    <div className="p-16">
      <h2 className="text-red-400 text-3xl font-bold mb-4">Film Credits</h2>

      {groupedAndSortedCredits.map((yearGroup) => (
        <div key={yearGroup.year} className="mb-4">
          <h3 className="text-red-300 text-lg font-semibold">
            {yearGroup.year}
          </h3>
          <ul>
            {yearGroup.credits.map((credit) => (
              <li key={credit.id} className="ml-4 font-extralight">
                {credit.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PersonCredits;
