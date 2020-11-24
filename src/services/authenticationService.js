import axios from "axios";

// import { LOGIN_USER } from "../state/actions";
// export const registerUserService = (request) => {
//   const REGISTER_API_ENDPOINT = "http://localhost:3000/api/v1/register";

//   const parameters = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(request.user)
//   };

//   return fetch(REGISTER_API_ENDPOINT, parameters)
//     .then((response) => response.json())
//     .then((json) => json);
// };

// export const createAction = (type, payload) => ({
//   type,
//   payload
// });

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

// export const loginUserService = (request) => {
//   const LOGIN_API_ENDPOINT = "https://irecruiter.herokuapp.com/api/user/login";

//   const parameters = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(request)
//   };

//   return fetch(LOGIN_API_ENDPOINT, parameters)
//     .then((response) => response.json())
//     .then((json) => json);
// };
