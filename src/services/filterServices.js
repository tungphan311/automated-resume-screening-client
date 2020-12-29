import API from "utils/axios";

export const addNewFilter = async (values, token) =>
  await API.post("/filters", values, {
    headers: { Authorization: `Bearer ${token}` }
  });
