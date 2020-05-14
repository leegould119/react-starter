import axios from "axios";
var customData = require("./mock-data.json");
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
    url: "/src/mock/mock-data.json",
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
