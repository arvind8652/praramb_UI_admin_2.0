import axios, { AxiosRequestConfig } from "axios";

// Create an instance of Axios with baseURL (if needed)
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Add your API base URL here
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Helper function to handle GET request
export const getRequest = async (url: string, config?: AxiosRequestConfig) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Helper function to handle POST request
export const postRequest = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Helper function to handle PUT request
export const putRequest = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Helper function to handle PATCH request
export const patchRequest = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await api.patch(url, data, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// Optional: Error handler to standardize API errors
const handleApiError = (error: any) => {
  if (error.response) {
    // Server responded with a status other than 200 range
    console.error("API error:", error.response.data);
  } else if (error.request) {
    // Request was made but no response received
    console.error("No response received:", error.request);
  } else {
    // Other error scenarios
    console.error("Error in request setup:", error.message);
  }
};
