import axios from "axios";

export const loginUserService = async (account) => {
  const data = await axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    url: "https://irecruiter.herokuapp.com/api/user/login",
    data: account
  });
  return data;
};
