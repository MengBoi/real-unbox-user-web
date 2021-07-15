import axios from "axios";

export const communeQuery = async () => {
  axios
    .get(`http://3.21.37.234:3000/api/v1/location/zone/index`)
    .then((res) => {
      const persons = res.data;
      "persons", persons;
    });
};
