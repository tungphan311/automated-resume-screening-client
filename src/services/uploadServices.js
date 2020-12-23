import API from "utils/axios";

export const uploadFile = async (formData) => API.post("/upload/cv", formData);
