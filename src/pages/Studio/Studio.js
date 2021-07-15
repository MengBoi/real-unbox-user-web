import React, { useState, useEffect } from "react";

import StudioUI from "./StudioUI";
import axios from "axios";
const Studio = (props) => {
  // const [studioData, setStudioData] = useState(0);
  const [exteriorImg, setExteriorImg] = useState(0);
  const [interiorImg, setInteriorImg] = useState(0);
  const [architecturalImg, setArchitecturalImg] = useState(0);
  const [aerialImg, setAerialImg] = useState(0);
  useEffect(() => {
    // axios
    //   .get(`https://api.realunbox.com/api/v1/portfolio/photo/index`)
    //   .then((res) => {
    //     setStudioData(res.data.data);
    //   });
    axios
      .get(
        `https://api.realunbox.com/api/v1/portfolio/photo/index?type=EXTERIOR`
      )
      .then((res) => {
        setExteriorImg(res.data.data);
      });
    axios
      .get(
        `https://api.realunbox.com/api/v1/portfolio/photo/index?type=INTERIOR`
      )
      .then((res) => {
        setInteriorImg(res.data.data);
      });
    axios
      .get(
        `https://api.realunbox.com/api/v1/portfolio/photo/index?type=ARCHITECTURAL`
      )
      .then((res) => {
        setArchitecturalImg(res.data.data);
      });
    axios
      .get(`https://api.realunbox.com/api/v1/portfolio/photo/index?type=AERIAL`)
      .then((res) => {
        setAerialImg(res.data.data);
      });
  }, []);
  return (
    <StudioUI
      // studioData={studioData}
      exteriorImg={exteriorImg}
      interiorImg={interiorImg}
      architecturalImg={architecturalImg}
      aerialImg={aerialImg}
    />
  );
};

export default Studio;
