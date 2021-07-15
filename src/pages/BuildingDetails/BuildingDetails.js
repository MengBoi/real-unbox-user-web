import React, { useEffect, useState } from "react";
import BuildingDetailsUI from "./BuildingDetailsUI";
import { useParams } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import api_config from "./../../config/api_config";
const BuildingDetails = () => {
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState();
  const [similarProperties, setSimilarProperties] = useState();
  const setClick = (id, propertyType, zoneIdentifier) => {
    var pastArr = localStorage.getItem("userClick");
    // console.log("pastA", pastArr);
    // var arr = [
    //   { id: id, propertyType: propertyType, zoneIdentifier: zoneIdentifier },
    //   { id: id, propertyType: propertyType, zoneIdentifier: zoneIdentifier },
    //   { id: id, propertyType: propertyType, zoneIdentifier: zoneIdentifier },
    // ];
    pastArr = pastArr ? JSON.parse(pastArr) : [];
    pastArr.unshift({
      id: id,
      propertyType: propertyType,
      zoneIdentifier: zoneIdentifier,
    });

    if (pastArr.length > 30) {
      pastArr.pop();
    }
    localStorage.setItem("userClick", JSON.stringify(pastArr));
  };
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        // fetch data from a url endpoint
        let params = {
          propertyId: id,
        };

        params = _.pickBy(params, (obj) => {
          return obj !== "null";
        });

        // console.log("params", params);
        const response = await axios({
          method: "get",
          url: api_config.end_point + `/api/v1/property/detail`,
          params: params,
          config: {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        });
        console.warn("setPropertyDetails", response.data.data);
        setPropertyDetails(response.data.data);
        setSimilarProperties(response.data.similarProperties);
        setClick(
          response.data.data.id,
          response.data.data.propertyGroup.propertyType,
          response.data.data.propertyGroup.zoneIdentifier
        );
      } catch (error) {
        // setError(error); // catches both errors
      }
    };
    fetchPropertyDetails();
  }, [id]);

  return (
    <BuildingDetailsUI
      propertyDetails={propertyDetails}
      similarProperties={similarProperties}
    />
  );
};

export default BuildingDetails;
