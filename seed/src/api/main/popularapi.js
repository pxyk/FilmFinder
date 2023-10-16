export const fetchPopularMovies = async () => {
  try {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg5NjA5MGYyMjg0ZDJlZmE3NjNlY2IzZGZlMjY3ZiIsInN1YiI6IjY1MjY5MTkzZmQ2MzAwNWQ3OGQ3N2NkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t18jZWf0yG3Lv_AzS_6MOG4xh49M-dxYrTOAKFHvlTA",
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching popular movies: ${error.message}`);
  }
};
