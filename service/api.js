import axios from 'axios';

export const BASE_URL = 'https://api.spotify.com/v1/episodes/512ojhOuo1ktJprKbVcKyQ'; // Mettez ici votre URL de base

export const apiEndpoints = {
  getUserPlaylist: (userId) => {
    return `/users/${userId}/episodes`;
  },
  getEpisodes: () => {
    return `/browse/episodes`;
  },
  getNewRelease: () => {
    return `/browse/new-releases?country=IN`;
  },
};

export const fetchData = async (endpoint, accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

