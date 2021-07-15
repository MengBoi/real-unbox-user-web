import React from "react";
import {
  Box,
  Container,
  Typography,
  // TextField,
  // Button,
  // Menu,
  // MenuItem,
  // InputAdornment,
  // InputBase,
  // IconButton,
  Grid,
  ButtonBase,
  Hidden,
} from "@material-ui/core";
import Image from "material-ui-image";
import { useTranslation } from "react-i18next";
import Pagination from "@material-ui/lab/Pagination";
// import Slider from "infinite-react-carousel";
import colors from "../../config/colors";
import Search from "../../components/reusable/Search";
import DropDown from "../../components/reusable/DropDown";
import _ from "lodash";
import PropertiesCard from "./PropertiesCard";
import { makeStyles } from "@material-ui/core/styles";

import FilterModal from "./FilterModal";
const useStyles = makeStyles((theme) => ({
  notFoundText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
  },
  notFoundImg: {
    width: "20%",
  },
  notFoundContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: "100%",
    flexDirection: "column",
  },
  titleBox: {
    height: 400,
    [theme.breakpoints.down("xs")]: { height: 300 },
    [theme.breakpoints.down("sm")]: { height: 300 },
  },
  title: {
    fontWeight: "bold",
    color: colors.white,
    [theme.breakpoints.only("xs")]: {
      fontSize: 20,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 25,
    },
    fontSize: 50,
  },
}));
const PropertiesUI = (props) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    propertyContext,
    subPropertyTypes,
    onPropertyClick,
    properties,
    locations,
    numberOfBathroom,
    handleBathroomChange,
    numberOfBedroom,
    dealTypes,
    sortByIndex,
    onSortByChange,
    maximumPrice,
    minimumPrice,
    handleLocationChange,
    handleSubPropertyTypeChange,
    handleBedroomChange,
    handleDealTypeChange,
    handleMinimumPriceChange,
    handleMaximumPriceChange,
    onPaginationChange,
    onSearchClick,
    pagination,
    selectedPage,
    subPropertyType,
    selectedDealType,
    sortByValue,
    noProperties,
  } = props;

  return (
    <div>
      <Box
        className={classes.titleBox}
        style={{
          backgroundImage: 'url("/images/26.jpg")',
          backgroundPosition: "center",
          backgroundColor: "#8c8c8c",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <div style={{ height: 20 }} />
        <Typography className={classes.title}>{t("Properties")}</Typography>
      </Box>

      <Container maxWidth="lg">
        <div style={{ height: 30 }} />
        <Hidden smDown>
          <Grid container spacing={1}>
            <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
              <DropDown
                label={t("Deal Type")}
                options={dealTypes}
                // minWidth={140}
                handleChange={handleDealTypeChange}
              />
            </Grid>

            <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
              <DropDown
                label={t("Minimum Price")}
                // minWidth={170}
                options={minimumPrice}
                handleChange={handleMinimumPriceChange}
              />
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
              <DropDown
                label={t("Maximum Price")}
                // minWidth={170}
                options={maximumPrice}
                handleChange={handleMaximumPriceChange}
              />
            </Grid>
            {subPropertyType !== "building" && (
              <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                <DropDown
                  label={t("Bedroom")}
                  // minWidth={80}
                  options={numberOfBedroom}
                  handleChange={handleBedroomChange}
                />
              </Grid>
            )}
            {subPropertyType !== "building" && (
              <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                <DropDown
                  label={t("Bathroom")}
                  options={numberOfBathroom}
                  // minWidth={80}
                  handleChange={handleBathroomChange}
                />
              </Grid>
            )}
            <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
              <DropDown
                label={t("Property Type")}
                // minWidth={150}
                options={subPropertyTypes}
                selectedValue={propertyContext.selectedSubPropertyType}
                handleChange={handleSubPropertyTypeChange}
              />
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
              <DropDown
                label={t("Location")}
                // minWidth={200}
                options={locations}
                selectedValue={propertyContext.selectedLocation}
                handleChange={handleLocationChange}
              />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container spacing={2}>
            <Grid item sm={2} xs={4}>
              <FilterModal
                sortByValue={sortByValue}
                onSortByChange={onSortByChange}
                handleMaximumPriceChange={handleMaximumPriceChange}
                handleMinimumPriceChange={handleMinimumPriceChange}
                handleDealTypeChange={handleDealTypeChange}
                minimumPrice={minimumPrice}
                maximumPrice={maximumPrice}
                numberOfBedroom={numberOfBedroom}
                numberOfBathroom={numberOfBathroom}
                subPropertyTypes={subPropertyTypes}
                locations={locations}
                selectedDealType={selectedDealType}
                subPropertyType={subPropertyType}
                handleBedroomChange={handleBedroomChange}
                handleBathroomChange={handleBathroomChange}
                propertyContext={propertyContext}
                handleLocationChange={handleLocationChange}
                handleSubPropertyTypeChange={handleSubPropertyTypeChange}
              />
            </Grid>
            <Grid item sm={10} xs={8}>
              <Hidden smUp>
                <Search
                  onClick={onSearchClick}
                  placeholder={t("Property Name")}
                />
              </Hidden>

              <Hidden xsDown>
                <Search
                  onClick={onSearchClick}
                  placeholder={t("Search for listing using the unit name")}
                />
              </Hidden>
            </Grid>
          </Grid>
        </Hidden>
      </Container>
      <Hidden smDown>
        <div style={{ height: 30 }} />
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xl={6} lg={6} md={6}>
              <Box display="flex" alignItems="center" textAlign="right">
                <Typography style={{ marginRight: 10, color: colors.primary }}>
                  {t("Sort by")}:
                </Typography>

                <ButtonBase
                  onClick={() => {
                    onSortByChange(0, "high_to_low_price");
                  }}
                >
                  <Box
                    borderRadius={5}
                    border={1}
                    borderColor={
                      sortByIndex === 0 ? colors.primary : colors.grey
                    }
                    style={{
                      backgroundColor:
                        sortByIndex === 0 ? colors.primary : colors.white,
                      padding: 10,
                      color: sortByIndex === 0 ? colors.white : colors.grey,

                      fontWeight: "bold",
                    }}
                  >
                    {t("Price (High-Low)")}
                  </Box>
                </ButtonBase>
                <div style={{ width: 10 }} />

                <ButtonBase
                  onClick={() => {
                    onSortByChange(1, "low_to_high_price");
                  }}
                >
                  <Box
                    borderRadius={5}
                    border={1}
                    borderColor={
                      sortByIndex === 1 ? colors.primary : colors.grey
                    }
                    style={{
                      backgroundColor:
                        sortByIndex === 1 ? colors.primary : colors.white,
                      padding: 10,
                      color: sortByIndex === 1 ? colors.white : colors.grey,

                      fontWeight: "bold",
                    }}
                  >
                    {t("Price (Low-High)")}
                  </Box>
                </ButtonBase>
                <div style={{ width: 10 }} />
                <ButtonBase
                  onClick={() => {
                    onSortByChange(2, "newest");
                  }}
                >
                  <Box
                    borderRadius={5}
                    border={1}
                    borderColor={
                      sortByIndex === 2 ? colors.primary : colors.grey
                    }
                    style={{
                      backgroundColor:
                        sortByIndex === 2 ? colors.primary : colors.white,
                      padding: 10,
                      color: sortByIndex === 2 ? colors.white : colors.grey,

                      fontWeight: "bold",
                    }}
                  >
                    {t("Newest")}
                  </Box>
                </ButtonBase>
              </Box>
            </Grid>
            <Grid item xl={6} lg={6} md={6}>
              <Search
                onClick={onSearchClick}
                placeholder={t("Search for listing using the unit name")}
              />
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <div style={{ height: 30 }} />

      <Container maxWidth="lg">
        {noProperties && (
          <Box className={classes.notFoundContainer}>
            <Box className={classes.notFoundImg}>
              <Image src="/images/home.png" />
            </Box>
            <Typography className={classes.notFoundText}>
              Property not found
            </Typography>
          </Box>
        )}
        <Grid container spacing={3}>
          {_.map(properties, (property) => {
            return (
              <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                <PropertiesCard
                  onClick={() => {
                    onPropertyClick(
                      property.id,
                      property.propertyGroup.propertyType,
                      property.propertyGroup.zoneIdentifier
                    );
                  }}
                  spaceImage={property.propertyGroup.images[0].imageUrl}
                  dealType={property.dealType}
                  price={property.totalPrice}
                  area={property.area}
                  name={property.propertyGroup.projectName}
                  location={property.propertyGroup.zone}
                  numberOfBedrooms={property.numberOfBedrooms}
                  floor={property.floor}
                  orientation={property.orientation}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <div style={{ height: 30 }} />

      {!noProperties && (
        <Container maxWidth="xl">
          <Box display="flex" justifyContent="center">
            <Pagination
              count={pagination.totalPage}
              variant="outlined"
              shape="rounded"
              siblingCount={3}
              boundaryCount={3}
              size="large"
              onChange={onPaginationChange}
              page={
                localStorage.getItem("paginationPage")
                  ? parseInt(localStorage.getItem("paginationPage"))
                  : 1
              }
            />
          </Box>
        </Container>
      )}

      <div style={{ height: 500 }} />
    </div>
  );
};
export default PropertiesUI;
