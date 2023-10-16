import React, { useEffect, useState } from "react";
import { fetchPersonCredits } from "@/api/person/personcreditapi";

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
    <div>
      <h2>Film Credits</h2>
      {groupedAndSortedCredits.map((yearGroup) => (
        <div key={yearGroup.year}>
          <h3>{yearGroup.year}</h3>
          <ul>
            {yearGroup.credits.map((credit) => (
              <li key={credit.id}>{credit.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PersonCredits;
