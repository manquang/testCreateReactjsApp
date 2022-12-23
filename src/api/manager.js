// import axios from "axios";

// const BASE_URL = "http://localhost:5000";
// axios.create({
//   baseURL: process.env.REACT_APP_BACKEND_URL,
// });

// export const login = async (username, password) => {
//   // let responseData;

//   return axios.post("/api/login", {
//     username,
//     password,
//   });
// };
import axios from "axios";

export const login = async (username, password) => {
  return axios.post(
    "http://localhost:5000/api/login",
    {
      username,
      password,
    },
    {
      withCredentials: true,
    }
  );
  // .then((response) => {
  //   responseData = response.data;
  // })
  // .catch(function (error) {
  //   // handle error
  //   responseData = error.response.data;
  // });

  // return responseData;
};
