import axios from 'axios';

const API_KEY = `1b50ba0e0b99203af5e26bdcee6d2298`;
const URL = `https://api.themoviedb.org/3/`;

export default async function fetchResult() {
  const response = await axios
    .get(URL + 'trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data.results;
}

export async function getMovieInfo(id) {
  const response = await axios
    .get(URL + 'movie/' + id, {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data;
}

export async function getCast(id) {
  const response = await axios
    .get(URL + 'movie/' + id + `/credits`, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data.cast;
}

export async function getReviews(id) {
  const response = await axios
    .get(URL + 'movie/' + id + `/reviews`, {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data.results;
}

export async function findMovies(query) {
  const response = await axios
    .get(URL + 'search/movie', {
      params: {
        api_key: API_KEY,
        query,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data.results;
}
