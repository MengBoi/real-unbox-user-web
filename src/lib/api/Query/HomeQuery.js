import axios from "axios";

export const homeQuery = async () => {
  return axios
    .get(`https://api.realunbox.com/api/v1/home/index`)
    .then((res) => {
      const result = res.data;

      return result;
    });
};
