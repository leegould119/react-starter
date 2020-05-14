import axios from "axios";

const getUserData = async function () {
  const headers = {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  };

  const ax = axios.create({
    baseURL: "http://localhost:8080/"
  });
  return await axios({
    method: "get",
    url: "/src/mock/banners.json",
    headers: headers
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      if (error.response) {
        console.log("error : " + error);
      }
    });
};

export default getUserData;
