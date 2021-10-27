const API_URL = "http://10.0.2.2:3000";

export const getList = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export default API_URL;
