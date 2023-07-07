// src/utils/api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export async function fetchWeatherData(city) {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather?city=${city}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

export async function fetchNewsData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/news`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news data:', error);
    throw error;
  }
}

// Add more functions for other API requests if needed
