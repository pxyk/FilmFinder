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
    <div>
      <h2>Videos</h2>
      <div>
        {videos.map((video) => (
          <div key={video.key}>
            <iframe
              title={video.name}
              width="560"
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
