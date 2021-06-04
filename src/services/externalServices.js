import API from "utils/axios";

export const getProvinces = async () => await API.get("/province");
