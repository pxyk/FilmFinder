export async function fetchPersonData(personId) {
  const url = `https://api.themoviedb.org/3/person/${personId}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg5NjA5MGYyMjg0ZDJlZmE3NjNlY2IzZGZlMjY3ZiIsInN1YiI6IjY1MjY5MTkzZmQ2MzAwNWQ3OGQ3N2NkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t18jZWf0yG3Lv_AzS_6MOG4xh49M-dxYrTOAKFHvlTA",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching person data:", error);
    throw new Error("Error fetching person data");
  }
}
