import React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  // Avatar,
  Divider,
  makeStyles,
  Hidden,
  // Paper,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import BookVisit from "../../components/reusable/BookVisit";
import Slider from "infinite-react-carousel";
import _ from "lodash";
import Image from "material-ui-image";
import colors from "../../config/colors";
import ReactPlayer from "react-player";
import GoogleMap from "../../components/reusable/GoogleMap";
// import { Check, Clear } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

import PropertiesCard from "./PropertiesCard";
const images = [
  { img: "/images/place-1.jpg" },
  { img: "/images/place-2.jpg" },
  { img: "/images/place-3.jpg" },
  { img: "/images/place-4.jpg" },
];
const useStyles = makeStyles((theme) => ({
  infoIndicatorText: {
    fontWeight: "bold",
  },
  checkIcon: {
    color: colors.green,
  },
  clearIcon: {
    color: colors.cerise,
  },
  seperator3: { height: 30 },
  seperator2: { height: 20 },
  seperator1: { height: 10 },
  horizontalSep1: { width: 10 },
  detailTextContainer: {
    // alignItems: "flex-end",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },

  detailTitle: {
    padding: 10,
    color: colors.white,
    backgroundColor: colors.primary,
  },
  unitTitleTextContainer: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: 23,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabTitleText: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "500",
    color: colors.primary,
  },
  similarUnit: {
    fontSize: 50,
    fontWeight: "500",
    color: colors.primary,
    alignItems: "center",
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
  downPayment: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    [theme.breakpoints.only("xs")]: {
      fontSize: 14,
    },
  },
  slider: {
    [theme.breakpoints.only("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: 20,
    },
  },
  titleBox: {
    height: 400,
    [theme.breakpoints.only("xs")]: {
      height: 300,
    },
  },
  dealTypeText: {
    textTransform: "capitalize",
  },
  propertyTitle: {
    fontSize: 40,
    color: colors.primary,
    textTransform: "uppercase",

    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
      fontWeight: "500",
      color: colors.primary,
    },
  },
}));
const featuredImagesCarouselSettings = {
  arrows: false,
  dots: true,
  slidesToShow: 1,
  virtualList: true,
  overScan: 2,
  adaptiveHeight: true,
};
const featuredPropertiesCarouselSettings = {
  arrows: false,
  dots: true,
  slidesToShow: 3,
  virtualList: true,
};
const featuredPropertiesCarouselSettingsForSMScreen = {
  arrows: false,
  dots: true,
  slidesToShow: 2,
  virtualList: true,
};
const featuredPropertiesCarouselSettingsForXSScreen = {
  arrows: false,
  dots: true,
  slidesToShow: 1,
  virtualList: true,
};

const BuildingDetailsUI = (props) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();
  const { propertyDetails, similarProperties } = props;
  // console.log("building", propertyDetails);
  const functions = propertyDetails && propertyDetails.functions.split(",");
  const onPropertyClick = (id) => {
    history.push("./" + id);
  };
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
        <Typography variant="h3" className={classes.title}>
          {t("Property Details")}
        </Typography>
      </Box>
      <div style={{ height: 30 }} />
      {/* <Typography variant="h4">Property Details</Typography> */}

      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            flexDirection="row"
            style={{
              position: "relative",
            }}
          >
            <Box
              align="left"
              display="flex"
              flexDirection="column"
              style={{
                position: "sticky",
                top: 130,
              }}
              borderColor={colors.primary}
              borderRadius={5}
              border={3}
            >
              <Box
                p={5}
                pt={2}
                pb={2}
                className={classes.unitTitleTextContainer}
              >
                {propertyDetails && propertyDetails.propertyGroup.projectName}
              </Box>

              <Box p={5} pt={3} display="flex" flexDirection="column">
                <Box flexDirection="row" display="flex">
                  <Typography style={{ fontWeight: "bold" }}>
                    {t("ID")}:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    {propertyDetails && propertyDetails.id}
                  </Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex">
                  <Typography style={{ fontWeight: "bold" }}>
                    {t("Address")}:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    {propertyDetails &&
                      propertyDetails.propertyGroup.addressName}
                  </Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="flex-end">
                  <Typography className={classes.infoIndicatorText}>
                    {t("Building Height")}:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    {propertyDetails &&
                      propertyDetails.propertyGroup.numberOfFloors}{" "}
                    {t("Storey")}
                  </Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="center">
                  <Typography style={{ fontWeight: "bold" }}>
                    {t("Building Area")}:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    {" "}
                    {propertyDetails && propertyDetails.area} m
                    <sup style={{ fontSize: 13 }}>2</sup>
                  </Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="center">
                  <Typography style={{ fontWeight: "bold" }}>
                    {t("Price")}:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    $
                    {propertyDetails &&
                      propertyDetails.totalPrice &&
                      propertyDetails.totalPrice.toLocaleString()}
                  </Typography>
                </Box>
                {/* <div style={{ height: 10 }} />
              <Box flexDirection="row" display="flex" alignItems="center">
                <Typography style={{ fontWeight: "bold" }}>
                  Downpayment:
                </Typography>
                <div style={{ width: 10 }} />
                <Typography>15%</Typography>
              </Box> */}

                <div className={classes.seperator1} />

                <Box flexDirection="row" display="flex" alignItems="center">
                  <Typography style={{ fontWeight: "bold" }}>
                    {t("Contact Number")}:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>0969911996</Typography>
                  <Typography style={{ marginLeft: 5, marginRight: 5 }}>
                    /
                  </Typography>
                  <Typography>011689911</Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="center">
                  <Typography style={{ fontWeight: "bold" }}>
                    {t("Handover Condition")}:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    {" "}
                    {t(propertyDetails && propertyDetails.handOverCondition)}
                  </Typography>
                </Box>

                <div style={{ height: 30 }} />
                <Divider />
                <Grid container>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className={classes.seperator1} />
                    <Typography>
                      {propertyDetails &&
                        propertyDetails.propertyGroup.ownership}
                    </Typography>
                    <div className={classes.seperator1} />

                    <Typography className={classes.dealTypeText}>
                      {t("For ") +
                        t(propertyDetails && propertyDetails.dealType)}
                    </Typography>
                    <div className={classes.seperator1} />
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className={classes.seperator1} />
                    <Typography>
                      {propertyDetails && propertyDetails.orientation}
                    </Typography>
                    <div className={classes.seperator1} />
                    <Typography>
                      {propertyDetails && propertyDetails.buildingCategory}
                    </Typography>
                    <div className={classes.seperator1} />
                  </Grid>
                </Grid>
                <Divider />
                <div style={{ height: 30 }} />

                <Grid container>
                  <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                    <Typography align="center" className={classes.downPayment}>
                      {t("Down Payment")}
                    </Typography>
                    <Typography
                      align="center"
                      style={{
                        fontSize: 18,
                        // fontWeight: "bold",
                        color: colors.primary,
                      }}
                    >
                      {propertyDetails &&
                        propertyDetails.propertyGroup.downPayment}
                      %
                    </Typography>
                  </Grid>
                  <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                    <Typography align="center" className={classes.downPayment}>
                      {t("Installment")}
                    </Typography>
                    <Typography
                      align="center"
                      style={{
                        fontSize: 18,
                        // fontWeight: "bold",
                        color: colors.primary,
                      }}
                    >
                      {Math.floor(
                        propertyDetails &&
                          propertyDetails.propertyGroup.installment / 2629746
                      )}{" "}
                      {t("month")}
                      {Math.floor(
                        propertyDetails &&
                          propertyDetails.propertyGroup.installment / 2629746
                      ) > 1 && t("s")}
                    </Typography>
                  </Grid>
                  {/* <Grid item lg={4} xl={4} md={4} sm={4} xs={4}>
                    <Typography align="center" className={classes.downPayment}>
                      Loan Term
                    </Typography>
                    <Typography
                      align="center"
                      style={{
                        fontSize: 18,
                        // fontWeight: "bold",
                        color: colors.primary,
                      }}
                    >
                      ${(300000).toLocaleString()}
                    </Typography>
                  </Grid> */}
                </Grid>
                <div style={{ height: 30 }} />
                <BookVisit
                  projectName={
                    propertyDetails && propertyDetails.propertyGroup.projectName
                  }
                  projectType={
                    propertyDetails &&
                    propertyDetails.propertyGroup.propertyType
                  }
                  title={t("Book A Visit")}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sm={12}
            lg={7}
            xl={7}
            style={{
              position: "relative",
            }}
          >
            {propertyDetails && (
              <Container maxWidth="xl" className={classes.slider}>
                <Slider {...featuredImagesCarouselSettings}>
                  {_.map(propertyDetails.propertyGroup.images, (image) => {
                    return <Image aspectRatio={16 / 9} src={image.imageUrl} />;
                  })}
                </Slider>
              </Container>
            )}

            <Container maxWidth="xl">
              <Typography
                variant="h6"
                align="left"
                className={classes.detailTitle}
              >
                {t("Building Information")}
              </Typography>
              <div className={classes.seperator2} />
              <Grid container style={{ padding: 10 }} spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Location")}:
                      </Typography>
                      <Typography>
                        {propertyDetails &&
                          t(propertyDetails.propertyGroup.zone)}
                      </Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Building Area")}:
                      </Typography>

                      <Typography>
                        {" "}
                        {propertyDetails && propertyDetails.area} m
                        <sup style={{ fontSize: 13 }}>2</sup>
                      </Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />

                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Structure Type")}:
                      </Typography>

                      <Typography>
                        {propertyDetails && propertyDetails.structureType}
                      </Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Building Category")}:
                      </Typography>

                      <Typography>
                        {propertyDetails && propertyDetails.buildingCategory}
                      </Typography>
                    </Box>

                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Box
                        display="flex"
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignContent: "flex-start",
                        }}
                      >
                        <Typography className={classes.infoIndicatorText}>
                          {t("Function")}:
                        </Typography>
                      </Box>

                      <Box display="flex" style={{ flexDirection: "column" }}>
                        {_.map(functions, (fnc) => {
                          return <Typography>{t(fnc)}</Typography>;
                        })}
                      </Box>
                    </Box>
                    <Hidden smUp>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      {/* <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Basement:
                        </Typography>

                        <Typography>50 m</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} /> */}
                      {/* <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Commercial Unit")}:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.commercialUnit}{" "}
                          units
                        </Typography>
                      </Box> */}
                      {/* <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} /> */}
                      {/* <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Residential Unit:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.residentialUnit}{" "}
                          units
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} /> */}
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Orientation:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.orientation}
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Building Height")}:
                        </Typography>

                        <Typography>
                          {propertyDetails &&
                            propertyDetails.propertyGroup.numberOfFloors}
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Others:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                    </Hidden>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box align="left">
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Basement")}:
                        </Typography>

                        <Typography>50 m</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      {/* <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Commercial Unit:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.commercialUnit}{" "}
                          units
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} /> */}
                      {/* <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Residential Unit:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.residentialUnit}{" "}
                          units
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} /> */}
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Orientation")}:
                        </Typography>

                        <Typography>
                          {t(propertyDetails && propertyDetails.orientation)}
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Building Height")}:
                        </Typography>

                        <Typography>
                          {propertyDetails &&
                            propertyDetails.propertyGroup.numberOfFloors}
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Others")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Hidden>
              </Grid>
            </Container>
            <div className={classes.seperator2} />
            <Container maxWidth="xl">
              <Typography
                variant="h6"
                align="left"
                className={classes.detailTitle}
              >
                {t("Building Boundary")}
              </Typography>
              <div style={{ height: 10 }} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("North")}:
                      </Typography>
                      <Typography>
                        {propertyDetails && propertyDetails.north}
                      </Typography>
                    </Box>
                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("South")}:
                      </Typography>

                      <Typography>
                        {propertyDetails && propertyDetails.south}
                      </Typography>
                    </Box>
                    <Hidden smUp>
                      <div style={{ height: 5 }} />
                      <Divider />
                      <div style={{ height: 5 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("East")}:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.east}
                        </Typography>
                      </Box>
                      <div style={{ height: 5 }} />
                      <Divider />
                      <div style={{ height: 5 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("West")}:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.west}
                        </Typography>
                      </Box>
                    </Hidden>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box align="left">
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("East")}:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.east}
                        </Typography>
                      </Box>
                      <div style={{ height: 5 }} />
                      <Divider />
                      <div style={{ height: 5 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("West")}:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.west}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Hidden>
              </Grid>
            </Container>
            <div className={classes.seperator2} />
            <Container maxWidth="xl">
              <Typography
                variant="h6"
                align="left"
                className={classes.detailTitle}
              >
                {t("Land Information")}
              </Typography>
              <div style={{ height: 10 }} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Land Area")}:
                      </Typography>

                      <Typography>{t("None")}</Typography>
                    </Box>
                    {/* <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Width:
                      </Typography>
                      <Typography>Static</Typography>
                    </Box>
                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Length:
                      </Typography>

                      <Typography>None</Typography>
                    </Box> */}
                    <Hidden smUp>
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Others")}:
                        </Typography>

                        <Typography>{t("None")}</Typography>
                      </Box>
                    </Hidden>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box align="left">
                      {/* <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Land Area:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div style={{ height: 5 }} />
                      <Divider />
                      <div style={{ height: 5 }} /> */}
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Others")}:
                        </Typography>

                        <Typography>{t("None")}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Hidden>
              </Grid>
            </Container>
            <div className={classes.seperator2} />
            <Container maxWidth="xl">
              <Typography
                variant="h6"
                align="left"
                className={classes.detailTitle}
              >
                {t("Facilities")}
              </Typography>
              <div style={{ height: 10 }} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Parking Unit")}:
                      </Typography>
                      <Typography>
                        {" "}
                        {propertyDetails &&
                          propertyDetails.propertyGroup.parkingUnit}
                      </Typography>
                    </Box>
                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Parking Level")}:
                      </Typography>

                      <Typography>
                        {" "}
                        {propertyDetails &&
                          propertyDetails.propertyGroup.parkingLevel}{" "}
                      </Typography>
                    </Box>
                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Number Of Elevators")}:
                      </Typography>

                      <Typography>Static</Typography>
                    </Box>
                    <Hidden smUp>
                      <div style={{ height: 5 }} />
                      <Divider />
                      <div style={{ height: 5 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Amenities")}:
                        </Typography>

                        <Typography>Static</Typography>
                      </Box>
                      <div style={{ height: 5 }} />
                      <Divider />
                      <div style={{ height: 5 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Others")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                    </Hidden>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box align="left">
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Amenities")}:
                        </Typography>

                        <Typography>5</Typography>
                      </Box>
                      <div style={{ height: 5 }} />
                      <Divider />
                      <div style={{ height: 5 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Others")}:
                        </Typography>

                        <Typography>{t("None")}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Hidden>
              </Grid>
            </Container>
            <div className={classes.seperator2} />

            <Container maxWidth="xl">
              <Typography
                variant="h6"
                align="left"
                className={classes.detailTitle}
              >
                Financing
              </Typography>
              <div className={classes.seperator2} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Ownership")}
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Deal Type")}:
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Asking Price")}:
                      </Typography>

                      <Typography>None</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Booking Fee")}:
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Downpayment")}:
                      </Typography>

                      <Typography>None</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Installment")}:
                      </Typography>

                      <Typography>None</Typography>
                    </Box>
                    <Hidden smUp>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Rental Fee")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Deposit")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Lease Term")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Rent Review")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Management Fee")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Miscellaneous Fee")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                    </Hidden>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box align="left">
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Rental Fee")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Deposit")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Lease Term")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Rent Review")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Management Fee")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Miscellaneous Fee")}:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Hidden>
              </Grid>
            </Container>

            <div style={{ height: 20 }} />

            <Container maxWidth="xl">
              <ReactPlayer
                width="auto"
                controls={true}
                url="https://www.youtube.com/watch?v=b9bRSonqv-c"
              />
            </Container>

            {propertyDetails && propertyDetails.propertyGroup.latitude && (
              <Container maxWidth="xl" style={{ marginTop: 20 }}>
                <Typography className={classes.tabTitleText}>
                  {t("Property Location")}
                </Typography>

                <GoogleMap
                  latitude={
                    propertyDetails && propertyDetails.propertyGroup.latitude
                  }
                  longitude={
                    propertyDetails && propertyDetails.propertyGroup.longitude
                  }
                />
              </Container>
            )}
          </Grid>
        </Grid>
      </Container>
      <div className={classes.seperator3} />
      <div className={classes.seperator2} />
      <Container maxWidth="lg">
        {/* <Typography align="left" className={classes.tabTitleText}>
          Additional Information
        </Typography>
        <AdditionalInformationTabBar />
        <Typography align="left" className={classes.tabTitleText}>
          Neighborhood
        </Typography>
        <AdditionalInformationTabBar /> */}
        <Typography className={classes.propertyTitle}>
          {t("Similar Properties")}
        </Typography>
        {similarProperties && (
          <div>
            <Hidden smDown>
              <Slider {...featuredPropertiesCarouselSettings}>
                {_.map(similarProperties, (property) => {
                  return (
                    <div>
                      <PropertiesCard
                        spaceImage={
                          property.propertyGroup.images[0].imageUrl &&
                          property.propertyGroup.images[0].imageUrl
                        }
                        dealType={property.dealType}
                        price={property.totalPrice}
                        area={property.area}
                        name={property.propertyGroup.projectName}
                        location={property.propertyGroup.zone}
                        onClick={() => {
                          onPropertyClick(
                            property.id,
                            property.propertyGroup.propertyType
                          );
                        }}
                        numberOfBedrooms={property.numberOfBedrooms}
                        floor={property.floor}
                        orientation={property.orientation}
                      />
                    </div>
                  );
                })}
              </Slider>
            </Hidden>
            <Hidden xsDown mdUp>
              <Slider {...featuredPropertiesCarouselSettingsForSMScreen}>
                {_.map(similarProperties, (property) => {
                  return (
                    <div>
                      <PropertiesCard
                        spaceImage={
                          property.propertyGroup.images[0].imageUrl &&
                          property.propertyGroup.images[0].imageUrl
                        }
                        dealType={property.dealType}
                        price={property.totalPrice}
                        area={property.area}
                        name={property.propertyGroup.projectName}
                        location={property.propertyGroup.zone}
                        onClick={() => {
                          onPropertyClick(
                            property.id,
                            property.propertyGroup.propertyType
                          );
                        }}
                        numberOfBedrooms={property.numberOfBedrooms}
                        floor={property.floor}
                        orientation={property.orientation}
                      />
                    </div>
                  );
                })}
              </Slider>
            </Hidden>
            <Hidden smUp>
              <Slider {...featuredPropertiesCarouselSettingsForXSScreen}>
                {_.map(similarProperties, (property) => {
                  return (
                    <div>
                      <PropertiesCard
                        spaceImage={
                          property.propertyGroup.images[0].imageUrl &&
                          property.propertyGroup.images[0].imageUrl
                        }
                        dealType={property.dealType}
                        price={property.totalPrice}
                        area={property.area}
                        name={property.propertyGroup.projectName}
                        location={property.propertyGroup.zone}
                        onClick={() => {
                          onPropertyClick(
                            property.id,
                            property.propertyGroup.propertyType
                          );
                        }}
                        numberOfBedrooms={property.numberOfBedrooms}
                        floor={property.floor}
                        orientation={property.orientation}
                      />
                    </div>
                  );
                })}
              </Slider>
            </Hidden>
          </div>
        )}
      </Container>

      <div className={classes.seperator3} />
      {/* <Container maxWidth="lg">
        <Typography className={classes.similarUnit}>Similar Units</Typography>
      </Container> */}
      <div className={classes.seperator3} />
    </div>
  );
};
export default BuildingDetailsUI;
