import axios from "axios";

export const studioQuery = async () => {
  const response = await axios.get(
    `https://api.realunbox.com/api/v1/portfolio/photo/index`
  );
  // console.log("data : ", response);
  return response.data;
};
