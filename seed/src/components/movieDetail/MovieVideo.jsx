import React, { useEffect, useState } from "react";
import { fetchMovieVideos } from "@/api/movie/movievideoapi";

const MovieVideo = ({ movieId }) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const data = await fetchMovieVideos(movieId);
      const filteredVideos = data.results.slice(0, 9);
      setVideos(filteredVideos);
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [movieId]);

  return (
    <div className="mb-8 mt-24">
      <h2 className="text-3xl font-bold mb-4 text-center text-red-500">
        VIDEOS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.key} className="p-2">
            <iframe
              title={video.name}
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieVideo;
