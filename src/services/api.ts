const API_URL = "http://192.168.0.171:3000";

export const getList = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export default API_URL;
