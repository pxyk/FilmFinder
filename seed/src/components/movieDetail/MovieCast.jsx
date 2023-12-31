import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fetchCastData } from "@/api/movie/castapi";

const MovieCast = ({ movieId }) => {
  const [castData, setCastData] = useState(null);

  useEffect(() => {
    // Fetch cast data when component mounts
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

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto mt-16"
    >
      {/* Cast Section */}
      <h2 className="text-3xl font-bold mb-4 text-center text-red-500">CAST</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center"
      >
        {castData &&
          castData.cast &&
          castData.cast.slice(0, 10).map((actor) => (
            <motion.div
              variants={item}
              key={actor.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2"
              style={{ maxWidth: "200px" }}
            >
              {/* Actor Card */}
              <div className="relative rounded-lg overflow-hidden mb-4 group">
                <Link href={`/person/${actor.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={`${actor.name} Profile`}
                    className="w-full h-auto transition-transform transform hover:scale-110"
                    style={{ maxHeight: "250px" }}
                  />
                </Link>
              </div>
              <div className="text-white text-center">
                <Link href={`/person/${actor.id}`}>
                  <p className="font-bold">{actor.name}</p>
                </Link>
                <p className="text-gray-400">{actor.character}</p>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default MovieCast;
