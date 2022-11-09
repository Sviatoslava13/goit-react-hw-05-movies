import axios from 'axios';
const API__KEY = '5222b846da18c1903ab10bf5e2597c32';
const BASE__URL = 'https://api.themoviedb.org/3';

export function fetchGetTrending() {
  return axios
    .get(`${BASE__URL}/trending/movie/day?api_key=${API__KEY}`)
    .then(response => {
      return response.data.results;
    });
}

export function fetchSearchMovies(query) {
  return axios
    .get(
      `${BASE__URL}/search/movie?api_key=${API__KEY}&language=en-US&query=${query}`
    )
    .then(response => {
      return response.data.results;
    });
}
export function fetchGetMovieDetails(movieId) {
  return axios
    .get(`${BASE__URL}/movie/${movieId}?api_key=${API__KEY}&language=en-US`)
    .then(response => {
      return response.data;
    });
}
export function fetchGetMovieCredits(movieId) {
  return axios
    .get(
      `${BASE__URL}/movie/${movieId}/credits?api_key=${API__KEY}&language=en-US`
    )
    .then(response => {
      return response.data.cast;
    });
}
export function fetchGetMovieReviews(movieId) {
  return axios
    .get(
      `${BASE__URL}/movie/${movieId}/reviews?api_key=${API__KEY}&language=en-US&page=1`
    )
    .then(response => {
      return response.data.results;
    });
}
