const axios = require("axios");
const AsyncStorage = require('@react-native-async-storage/async-storage');
const { BASE_URL } = require("./api");

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    const access_token = await AsyncStorage.getItem("@access_token");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
  } catch (error) {
    console.error("Error getting access token:", error);
  }
  return config;
});

module.exports = axiosInstance;
