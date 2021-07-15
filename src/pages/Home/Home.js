import React, { useState, useEffect, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import HomeUI from "./HomeUI";
// import _ from "lodash";
// import { createBrowserHistory } from "history";
import axios from "axios";
import PropertyContext from "../../context/PropertyContext";

import api_config from "./../../config/api_config";

const residentialPropertyTypes = [
  { label: "Condo", value: "condo" },
  { label: "Villa", value: "villa" },
  { label: "Apartment", value: "apartment" },
  { label: "Townhouse", value: "townhouse" },
  { label: "Land", value: "land" },
  { label: "Building", value: "building" },
];
const commercialPropertyTypes = [
  { label: "Shophouse", value: "shophouse" },
  { label: "Mall", value: "mall" },
  { label: "Warehouse", value: "warehouse" },
  { label: "Office", value: "office" },
  { label: "Building", value: "building" },
  { label: "Land", value: "land" },
];
const Home = () => {
  const history = useHistory();
  const [hotDeals, setHotDeals] = useState([]);
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [propertyContext, setPropertyContext] = useContext(PropertyContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [recommendedProperties, setRecommendedProperties] = useState([]);

  const fetchHome = useCallback(async () => {
    try {
      setLoading(true);
      const hotDeals = await axios.get(
        api_config.end_point + `/api/v1/property/hotdeals`
      );
      const featured = await axios.get(
        api_config.end_point + `/api/v1/property/featured`
      );

      var userData = localStorage.getItem("userClick");
      userData = userData ? JSON.parse(userData) : [];
      // console.log("user data : ", userData);

      const recommended = await axios({
        method: "post",
        url: api_config.end_point + `/api/v1/property/recommended`,
        data: {
          userData: userData,
        },
        config: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      });

      // console.log("recommended : ", recommended);
      setHotDeals(hotDeals.data.data);
      setFeaturedProperties(featured.data.data);
      setRecommendedProperties(recommended.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    // Residential property type
    // fetchHotDeals();
    // fetchFeaturedProperties();
    fetchHome();
    // fetchRecommend();
  }, [fetchHome]);

  // const fetchRecommend = async () => {
  // const userData = localStorage.getItem("userClick")
  //   ? localStorage.getItem("userClick")
  //   : [];
  //   try {
  //     // fetch data from a url endpoint

  //     let params = {
  //       userData: userData,
  //     };

  //     params = _.pickBy(params, (obj) => {
  //       return obj !== "null";
  //     });

  //     console.log("params", params);
  // const response = await axios({
  //   method: "post",
  //   url: api_config.end_point + `/api/v1/property/recommended`,
  //   data: params,
  //   config: {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   },
  // });
  //     console.warn("recommend", response);
  //     setRecommendedProperties(response.data.data);
  //   } catch (error) {
  //     // setError(error); // catches both errors
  //   }
  // };

  const onPropertyClick = (id, propertyType) => {
    if (propertyType === "Condo") {
      history.push("./CondoDetails/" + id);
    }
    if (propertyType === "Building") {
      history.push("./BuildingDetails/" + id);
    }
    if (propertyType === "Apartment") {
      history.push("./ApartmentDetails/" + id);
    }
  };
  const onSubPropertyTypesClick = () => {
    history.push("/Properties");
  };

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  } else {
    return (
      <HomeUI
        hotDeals={hotDeals}
        onSubPropertyTypesClick={onSubPropertyTypesClick}
        residentialPropertyTypes={residentialPropertyTypes}
        commercialPropertyTypes={commercialPropertyTypes}
        onPropertyClick={onPropertyClick}
        featuredProperties={featuredProperties}
        setPropertyContext={setPropertyContext}
        propertyContext={propertyContext}
        recommendedProperties={recommendedProperties}
        // recommendedProperties={["", ""]}
      />
    );
  }
};

export default Home;
