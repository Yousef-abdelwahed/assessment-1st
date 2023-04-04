const api_key = "d3ae77f34fe98eac394d73b253537542";
const image_url = "https://image.tmdb.org/t/p/w500/";
const requests = {
  fetchMovie: `http://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`,
  fetchPeople: `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&language=en-US&page=1=$`,
  fetchTvShow: `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`,
};

export { requests, image_url };
