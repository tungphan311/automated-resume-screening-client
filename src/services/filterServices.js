import API from "utils/axios";

export const addNewFilter = async (values, token) =>
  await API.post("/filters", values, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getListFilter = async (page, token) =>
  await API.get(`/filters?page=${page}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
