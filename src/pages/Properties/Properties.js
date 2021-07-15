import React, { useState, useEffect, useContext } from "react";
import PropertiesUI from "./PropertiesUI";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import PropertyContext from "../../context/PropertyContext";

import api_config from "./../../config/api_config";
const minimumPrice = [
  { label: "No Minimum", value: "null" },
  { label: "100", value: "100" },
  { label: "500", value: "500" },
  { label: "1000", value: "1000" },
  { label: "5000", value: "5000" },
  { label: "10000", value: "10000" },
  { label: "50000", value: "50000" },
  { label: "100000", value: "100000" },
  { label: "500000", value: "500000" },
  { label: "1000000", value: "1000000" },
];

const maximumPrice = [
  { label: "No Maximum", value: "null" },
  { label: "100", value: "100" },
  { label: "200", value: "200" },
  { label: "400", value: "400" },
  { label: "600", value: "600" },
  { label: "800", value: "800" },
  { label: "1000", value: "1000" },
  { label: "5000", value: "5000" },
  { label: "10000", value: "10000" },
  { label: "500000", value: "500000" },
  { label: "1000000", value: "1000000" },
];

const numberOfBedroom = [
  { label: "All", value: "null" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "4+", value: "4plus" },
];

const numberOfBathroom = [
  { label: "All", value: "null" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "4+", value: "4plus" },
];

const locations = [
  { label: "All", value: "null" },
  { label: "Mean Chey", value: "mean_chey" },
  { label: "Dong Kao", value: "dong_kao" },
  { label: "Sen Sok", value: "sen_sok" },
  { label: "Chamkarmon", value: "chamkarmon" },
  { label: "Prampi Makara", value: "prampi_makara" },
  { label: "Daun Penh", value: "daun_penh" },
  { label: "Russei Keo", value: "russei_keo" },
  { label: "Toul Kok", value: "toul_kok" },
  { label: "Chroy Changvar", value: "chroy_changvar" },
  { label: "Chbar Ompov", value: "chbar_ompov" },
  { label: "Beoung Keng Kong", value: "beoung_keng_kong" },
  { label: "Por Sen Chey", value: "por_sen_chey" },
  { label: "Prek Pnov", value: "prek_pnov" },
  { label: "Siem Reap", value: "siem_reap" },
  { label: "Sihanoukville", value: "sihanoukville" },
];

const subPropertyTypes = [
  { label: "All", value: "null" },
  { label: "Condo", value: "condo" },
  { label: "Land", value: "land" },
  { label: "Mall", value: "mall" },
  { label: "Building", value: "building" },
  { label: "Office", value: "office" },
  { label: "Villa", value: "villa" },
  { label: "Warehouse", value: "warehouse" },
  { label: "Shophouse", value: "shophouse" },
  { label: "Apartment", value: "apartment" },
  { label: "Townhouse", value: "townhouse" },
];
const dealTypes = [
  { label: "All", value: "null" },
  { label: "Sale", value: "sale" },
  { label: "Rent", value: "rent" },
];

const Properties = (props) => {
  const [propertyContext, setPropertyContext] = useContext(PropertyContext);
  const [subPropertyType, setSubPropertyType] = useState("");
  const [sortByValue, setSortByValue] = useState("high_to_low_price");
  const [selectedNumberOfBedroom, setSelectedNumberOfBedroom] = useState("");
  const [selectedNumberOfBathroom, setSelectedNumberOfBathroom] = useState("");
  const [selectedDealType, setSelectedDealType] = useState("");
  const [selectedMinimumPrice, setSelectedMinimumPrice] = useState("");
  const [selectedMaximumPrice, setSelectedMaximumPrice] = useState("");
  const [selectedPage, setSelectedPage] = useState(
    localStorage.getItem("paginationPage")
      ? localStorage.getItem("paginationPage")
      : 1
  );

  const [searchText, setSearchText] = useState("");
  const [noProperties, setNoProperties] = useState(false);

  const [propertiesResponse, setPropertiesResponse] = useState("");

  useEffect(() => {
    // Residential property type
    console.warn("propertyContext", propertyContext);

    const fetchProperties = async () => {
      try {
        // fetch data from a url endpoint

        const { selectedLocation, selectedSubPropertyType } = propertyContext;

        let params = {
          zone: selectedLocation,
          propertyType: selectedSubPropertyType,
          sortBy: sortByValue,
          numberOfBedrooms: selectedNumberOfBedroom,
          numberOfBathrooms: selectedNumberOfBathroom,
          dealType: selectedDealType,
          minPrice: selectedMinimumPrice,
          maxPrice: selectedMaximumPrice,
          page: selectedPage,
          text: searchText,
          pageSize: 12,
        };

        params = _.pickBy(params, (obj) => {
          return obj !== "null";
        });

        // console.log("params", params);
        const response = await axios({
          method: "get",
          url: api_config.end_point + `/api/v1/search/property`,
          params: params,
          config: {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        });
        console.warn("properties", response);

        setPropertiesResponse(response);
        if (response.data.pagination.count === 0) {
          setNoProperties(true);
        } else {
          setNoProperties(false);
        }
      } catch (error) {
        // setError(error); // catches both errors
      }
    };
    fetchProperties();
  }, [
    propertyContext,
    sortByValue,
    selectedNumberOfBedroom,
    selectedNumberOfBathroom,
    selectedDealType,
    selectedMinimumPrice,
    selectedMaximumPrice,
    selectedPage,
    searchText,
  ]);

  const [sortByIndex, setSortByIndex] = useState(0);

  const [_propertyTypeAnchorEl, _setPropertyTypeAnchorEl] = useState(null);
  const [_priceLimitAnchorEl, _setPriceLimitAnchorEl] = useState(null);
  const [_priceLimit, _setPriceLimit] = useState(5000);
  const [_propertyType, _setPropertyType] = useState("Residence");
  const priceLimits = [5000, 10000, 50000, 10000, 50000, 100000, 500000];
  const propertyTypes = ["Residence", "Offices", "Commercial"];

  const history = useHistory();
  const _onPropertyTypeClick = (event) => {
    _setPropertyTypeAnchorEl(event.currentTarget);
  };
  const onSelectedPageChange = (page) => {
    setSelectedPage(page);
    localStorage.setItem("paginationPage", page);
  };
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
  const _onPropertyTypeClose = (type) => {
    _setPropertyTypeAnchorEl(null);
    if (type) {
      _setPropertyType(type);
    }
  };
  const _onPriceLimitClick = (event) => {
    _setPriceLimitAnchorEl(event.currentTarget);
  };
  const _onPriceLimitClose = (price) => {
    _setPriceLimitAnchorEl(null);
    if (price) {
      _setPriceLimit(price);
    }
  };

  const onSortByChange = (index, value) => {
    setSortByIndex(index);
    setSortByValue(value);
    onSelectedPageChange(1);
  };
  const handleLocationChange = (event, child) => {
    setPropertyContext({
      ...propertyContext,
      selectedLocation: event.target.value,
    });
    onSelectedPageChange(1);
  };
  const handleSubPropertyTypeChange = (event, child) => {
    setPropertyContext({
      ...propertyContext,
      selectedSubPropertyType: event.target.value,
    });
    setSubPropertyType(event.target.value);
    onSelectedPageChange(1);

    if (event.target.value === "building") {
      setSelectedNumberOfBedroom(null);
      setSelectedNumberOfBathroom(null);
    }
  };
  const handleBedroomChange = (event, child) => {
    setSelectedNumberOfBedroom(event.target.value);
    onSelectedPageChange(1);
  };
  const handleBathroomChange = (event, child) => {
    setSelectedNumberOfBathroom(event.target.value);
    onSelectedPageChange(1);
  };
  const handleDealTypeChange = (event, child) => {
    setSelectedDealType(event.target.value);
    onSelectedPageChange(1);
  };
  const handleMinimumPriceChange = (event, child) => {
    setSelectedMinimumPrice(event.target.value);
    onSelectedPageChange(1);
  };
  const handleMaximumPriceChange = (event, child) => {
    setSelectedMaximumPrice(event.target.value);
    onSelectedPageChange(1);
  };

  const onPaginationChange = (event, value) => {
    onSelectedPageChange(value);
  };
  const onSearchClick = (value) => {
    setSearchText(value);
    onSelectedPageChange(1);
  };

  return (
    <PropertiesUI
      onPaginationChange={onPaginationChange}
      propertyContext={propertyContext}
      properties={propertiesResponse && propertiesResponse.data.data}
      subPropertyTypes={subPropertyTypes}
      onPropertyClick={onPropertyClick}
      onPropertyTypeClick={_onPropertyTypeClick}
      propertyTypeAnchorEl={_propertyTypeAnchorEl}
      priceLimitAnchorEl={_priceLimitAnchorEl}
      onPropertyTypeClose={_onPropertyTypeClose}
      onPriceLimitClick={_onPriceLimitClick}
      onPriceLimitClose={_onPriceLimitClose}
      priceLimits={priceLimits}
      priceLimit={_priceLimit}
      propertyTypes={propertyTypes}
      propertyType={_propertyType}
      locations={locations}
      numberOfBathroom={numberOfBathroom}
      numberOfBedroom={numberOfBedroom}
      dealTypes={dealTypes}
      sortByIndex={sortByIndex}
      onSortByChange={onSortByChange}
      minimumPrice={minimumPrice}
      maximumPrice={maximumPrice}
      handleLocationChange={handleLocationChange}
      handleSubPropertyTypeChange={handleSubPropertyTypeChange}
      handleBedroomChange={handleBedroomChange}
      handleBathroomChange={handleBathroomChange}
      handleDealTypeChange={handleDealTypeChange}
      handleMinimumPriceChange={handleMinimumPriceChange}
      handleMaximumPriceChange={handleMaximumPriceChange}
      onSearchClick={onSearchClick}
      pagination={propertiesResponse && propertiesResponse.data.pagination}
      selectedPage={selectedPage}
      subPropertyType={subPropertyType}
      selectedDealType={selectedDealType}
      sortByValue={sortByValue}
      noProperties={noProperties}
    />
  );
};
export default Properties;
