import axios from "axios";
const API_URL = "http://192.168.0.171:3000";

const api = axios.create({
  baseURL: API_URL,
});

export const getList = async ({ page }: any) => {
  const params = { page: page, limit: 3 };
  const response = await api.get(API_URL, { params });
  return response.data;
};

export default API_URL;
