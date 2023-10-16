import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchCastData } from "@/api/movie/castapi";

const MovieCast = ({ movieId }) => {
  const [castData, setCastData] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchCastData(movieId);
        setCastData(data);
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {castData && castData.cast && castData.cast.length > 0 ? (
        <ul>
          {castData.cast.slice(0, 9).map((actor) => (
            <li key={actor.id}>
              <Link href={`/person/${actor.id}`}>
                <p>{actor.name}-{actor.character}</p>
                </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
};

export default MovieCast;
