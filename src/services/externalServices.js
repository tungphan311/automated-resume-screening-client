import axios from "axios";

export const getProvinces = async () =>
  axios.get("https://vapi.vnappmob.com/api/province");
