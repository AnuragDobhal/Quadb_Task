import axios from 'axios';

const baseURL = 'https://api.tvmaze.com';

export const searchShows = async (query) => {
  try {
    const response = await axios.get(`${baseURL}/search/shows?q=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
