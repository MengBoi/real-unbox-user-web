import React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  // Avatar,
  ButtonBase,
  Divider,
  makeStyles,
  Hidden,
  // Hidden,
  // Paper,
} from "@material-ui/core";
import BookVisit from "../../components/reusable/BookVisit";
import Slider from "infinite-react-carousel";
import _ from "lodash";
import Image from "material-ui-image";
import colors from "../../config/colors";
import ReactPlayer from "react-player";
import GoogleMap from "../../components/reusable/GoogleMap";
import { Check, Clear } from "@material-ui/icons";
import AdditionalInformationTabBar from "./components/AdditionalInformationTabBar";
// import NeighborhoodTabBar from "./components/NeighborhoodTabBar";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import PropertiesCard from "./PropertiesCard";
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
    alignItems: "flex-start",
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
    [theme.breakpoints.only("sm")]: {
      fontSize: 14,
    },
  },
  tabTitleText: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "500",
    color: colors.primary,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  similarUnit: {
    fontSize: 50,
    fontWeight: "500",
    color: colors.primary,
    alignItems: "center",
  },
  slider: {
    [theme.breakpoints.only("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: 20,
    },
  },
  reactPlayer: {
    [theme.breakpoints.only("sm")]: {
      marginTop: 40,
    },
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
  titleBox: {
    height: 400,
    [theme.breakpoints.only("xs")]: {
      height: 300,
    },
  },
  downPayment: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    [theme.breakpoints.only("xs")]: {
      fontSize: 14,
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

const ApartmentDetailsUI = (props) => {
  const { t } = useTranslation();
  const { propertyDetails, similarProperties } = props;
  const classes = useStyles();
  const history = useHistory();
  console.warn("propertyDetails", propertyDetails);
  const otherAmenities =
    propertyDetails && propertyDetails.propertyGroup.moreAmenities
      ? propertyDetails.propertyGroup.moreAmenities.split(",")
      : "";
  const otherFacilities =
    propertyDetails && propertyDetails.propertyGroup.moreFacilities
      ? propertyDetails.propertyGroup.moreFacilities.split(",")
      : "";
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
        <Typography className={classes.title}>
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
            sm={12}
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
                  <Typography style={{ width: "80%" }}>
                    {propertyDetails &&
                      propertyDetails.propertyGroup.addressName}
                  </Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="flex-end">
                  <Typography className={classes.infoIndicatorText}>
                    {t("Size")}:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    {propertyDetails && propertyDetails.area} m
                    <sup style={{ fontSize: 13 }}>2</sup>
                  </Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="center">
                  <Typography style={{ fontWeight: "bold" }}>
                    {t("Deal Type")}:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography className={classes.dealTypeText}>
                    {t(propertyDetails && propertyDetails.dealType)}
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

                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="center">
                  <Typography style={{ fontWeight: "bold" }}>
                    {t("Floor Rank")} {t("Floor")}:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    {propertyDetails && propertyDetails.floor}
                    <sup style={{ fontSize: 13 }}>
                      {propertyDetails &&
                        propertyDetails.floor === 1 &&
                        t("st ")}
                      {propertyDetails &&
                        propertyDetails.floor === 2 &&
                        t("nd ")}
                      {propertyDetails &&
                        propertyDetails.floor === 3 &&
                        t("rd ")}
                      {propertyDetails && propertyDetails.floor > 3 && t("th ")}
                    </sup>
                  </Typography>
                </Box>
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

                <div style={{ height: 30 }} />
                <Divider />
                <Grid container>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className={classes.seperator1} />
                    <Typography>
                      {propertyDetails && propertyDetails.numberOfBedrooms}{" "}
                      {t("bedroom")}
                      {propertyDetails &&
                        propertyDetails.numberOfBedrooms > 1 &&
                        t("s")}
                    </Typography>
                    <div className={classes.seperator1} />
                    <Typography>
                      {propertyDetails && propertyDetails.numberOfBathrooms}{" "}
                      {t("bathroom")}
                      {propertyDetails &&
                        propertyDetails.numberOfBathrooms > 1 &&
                        t("s")}
                    </Typography>
                    <div className={classes.seperator1} />
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className={classes.seperator1} />
                    <Typography>
                      {propertyDetails && propertyDetails.numberOfLivingrooms}{" "}
                      {t("living room")}
                      {propertyDetails &&
                        propertyDetails.numberOfLivingrooms > 1 &&
                        t("s")}
                    </Typography>
                    <div className={classes.seperator1} />
                    <Typography>
                      {propertyDetails && propertyDetails.numberOfKitchens}{" "}
                      {t("kitchen")}
                      {propertyDetails &&
                        propertyDetails.numberOfKitchens > 1 &&
                        t("s")}
                    </Typography>
                    <div className={classes.seperator1} />
                  </Grid>
                </Grid>
                <Divider />
                <div style={{ height: 30 }} />

                <Grid container>
                  {propertyDetails &&
                    propertyDetails.propertyGroup.downPayment && (
                      <Grid item lg={4} xs={4} sm={4} md={4} xl={4}>
                        <Typography
                          align="center"
                          className={classes.downPayment}
                        >
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
                    )}
                  {propertyDetails &&
                    propertyDetails.propertyGroup.installment && (
                      <Grid item lg={4} xs={4} sm={4} md={4} xl={4}>
                        <Typography
                          align="center"
                          className={classes.downPayment}
                        >
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
                              propertyDetails.propertyGroup.installment /
                                31536000
                          )}{" "}
                          {t("year")}
                          {Math.floor(
                            propertyDetails &&
                              propertyDetails.propertyGroup.installment /
                                31536000
                          ) > 1 && t("s")}
                        </Typography>
                      </Grid>
                    )}
                  {propertyDetails && propertyDetails.propertyGroup.loanTerm && (
                    <Grid item lg={4} xs={4} sm={4} md={4} xl={4}>
                      <Typography
                        align="center"
                        className={classes.downPayment}
                      >
                        {t("Loan Term")}
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
                            propertyDetails.propertyGroup.loanTerm / 31536000
                        )}{" "}
                        {t("year")}
                        {Math.floor(
                          propertyDetails &&
                            propertyDetails.propertyGroup.loanTerm / 31536000
                        ) > 1 && t("s")}
                      </Typography>
                    </Grid>
                  )}
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
            sm={12}
            md={7}
            style={{
              position: "relative",
            }}
          >
            <Container maxWidth="xl" className={classes.slider}>
              {propertyDetails && (
                <Slider {...featuredImagesCarouselSettings}>
                  {_.map(propertyDetails.propertyGroup.images, (image) => {
                    return <Image aspectRatio={16 / 9} src={image.imageUrl} />;
                  })}
                </Slider>
              )}
            </Container>

            <Container maxWidth="xl">
              <Typography
                variant="h6"
                align="left"
                className={classes.detailTitle}
              >
                {t("Selected Unit")}
              </Typography>
              <div className={classes.seperator2} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Type")}:
                      </Typography>

                      <Typography>{t("Apartment")}</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
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
                        {t("Size")}:
                      </Typography>

                      <Typography>
                        {propertyDetails && propertyDetails.area} m
                        <sup style={{ fontSize: 13 }}>2</sup>
                      </Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Unit Price")}:
                      </Typography>
                      <Typography>
                        ${propertyDetails && propertyDetails.unitPrice} per m
                        <sup style={{ fontSize: 13 }}>2</sup>
                      </Typography>
                    </Box>

                    <Hidden smUp>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Bedroom")}:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.numberOfBedrooms}{" "}
                          {t("bedroom")}
                          {propertyDetails &&
                            propertyDetails.numberOfBedrooms > 1 &&
                            t("s")}
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Living Room")}:
                        </Typography>

                        <Typography>
                          {propertyDetails &&
                            propertyDetails.numberOfLivingrooms}
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Bathroom")}:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.numberOfBathrooms}
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Orientation")}:
                        </Typography>

                        <Typography>
                          {t(propertyDetails && propertyDetails.orientation)}
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
                          {t("Bedroom")}:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.numberOfBedrooms}
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Living Room")}:
                        </Typography>

                        <Typography>
                          {propertyDetails &&
                            propertyDetails.numberOfLivingrooms}
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Bathroom")}:
                        </Typography>

                        <Typography>
                          {propertyDetails && propertyDetails.numberOfBathrooms}
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Orientation")}:
                        </Typography>

                        <Typography>
                          {t(propertyDetails && propertyDetails.orientation)}
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
                {t("Amenities")}
              </Typography>
              <div className={classes.seperator2} />
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Indoor Furnishing")}
                      </Typography>
                      <Typography>
                        {t(
                          propertyDetails &&
                            propertyDetails.propertyGroup.indoorFurnishing
                        )}
                      </Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Internet")}:
                      </Typography>
                      <Typography>
                        {propertyDetails &&
                        propertyDetails.propertyGroup.internet
                          ? t("Available")
                          : t("NOT Available")}
                      </Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("24/7 Security")}:
                      </Typography>

                      <Typography>
                        {propertyDetails &&
                        propertyDetails.propertyGroup.security
                          ? t("Available")
                          : t("NOT Available")}
                      </Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("CCTV")}:
                      </Typography>
                      <Typography>
                        {propertyDetails && propertyDetails.propertyGroup.cctv
                          ? t("Available")
                          : t("NOT Available")}
                      </Typography>
                    </Box>
                    <Hidden smUp>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Others")}:
                        </Typography>

                        <Box display="flex" style={{ flexDirection: "column" }}>
                          {_.map(otherAmenities, (amenity) => {
                            return <Typography>{t(amenity)}</Typography>;
                          })}
                        </Box>
                      </Box>
                    </Hidden>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} md={6} sm={6} xs={12} lg={6}>
                    <Box align="left">
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Others")}:
                        </Typography>

                        <Box display="flex" style={{ flexDirection: "column" }}>
                          {_.map(otherAmenities, (amenity) => {
                            return <Typography>{t(amenity)}</Typography>;
                          })}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Hidden>
              </Grid>
            </Container>
            <div style={{ height: 20 }} />
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
                        {t("Swimming Pool")}:
                      </Typography>
                      {propertyDetails &&
                      propertyDetails.propertyGroup.swimmingPool ? (
                        <Check className={classes.checkIcon} />
                      ) : (
                        <Clear className={classes.clearIcon} />
                      )}
                    </Box>
                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Fitness Center")}:
                      </Typography>

                      {propertyDetails &&
                      propertyDetails.propertyGroup.fitnessCenter ? (
                        <Check className={classes.checkIcon} />
                      ) : (
                        <Clear className={classes.clearIcon} />
                      )}
                    </Box>
                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Steam/Sauna")}:
                      </Typography>

                      {propertyDetails &&
                      propertyDetails.propertyGroup.steamSauna ? (
                        <Check className={classes.checkIcon} />
                      ) : (
                        <Clear className={classes.clearIcon} />
                      )}
                    </Box>
                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        {t("Cafeteria")}:
                      </Typography>

                      {propertyDetails &&
                      propertyDetails.propertyGroup.cafeteria ? (
                        <Check className={classes.checkIcon} />
                      ) : (
                        <Clear className={classes.clearIcon} />
                      )}
                    </Box>
                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Hidden smUp>
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Others")}:
                        </Typography>
                        <Box display="flex" style={{ flexDirection: "column" }}>
                          {_.map(otherFacilities, (facility) => {
                            return <Typography>{facility}</Typography>;
                          })}
                        </Box>
                      </Box>
                    </Hidden>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box align="left">
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          {t("Others")}:
                        </Typography>

                        <Box display="flex" style={{ flexDirection: "column" }}>
                          {_.map(otherFacilities, (facility) => {
                            return <Typography>{facility}</Typography>;
                          })}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Hidden>
              </Grid>
            </Container>
            <div style={{ height: 20 }} />
            {propertyDetails && propertyDetails.propertyGroup.videoUrl && (
              <Container maxWidth="xl" className={classes.reactPlayer}>
                <ReactPlayer
                  width="auto"
                  controls={true}
                  url={
                    propertyDetails && propertyDetails.propertyGroup.videoUrl
                  }
                />
              </Container>
            )}
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

            <Container maxWidth="xl">
              <Typography className={classes.tabTitleText}>
                {t("Additional Information")}
              </Typography>
              <AdditionalInformationTabBar
                constructionStartDate={
                  propertyDetails &&
                  propertyDetails.propertyGroup.constructionStartDate
                }
                constructionEndDate={
                  propertyDetails &&
                  propertyDetails.propertyGroup.constructionEndDate
                }
                roomPerFloor={
                  propertyDetails && propertyDetails.propertyGroup.roomPerFloor
                }
                parkingLevel={
                  propertyDetails && propertyDetails.propertyGroup.parkingLevel
                }
                parkingUnit={
                  propertyDetails && propertyDetails.propertyGroup.parkingUnit
                }
                projectName={
                  propertyDetails && propertyDetails.propertyGroup.projectName
                }
                developedBy={
                  propertyDetails && propertyDetails.propertyGroup.developedBy
                }
                managedBy={
                  propertyDetails && propertyDetails.propertyGroup.managedBy
                }
                siteArea={
                  propertyDetails && propertyDetails.propertyGroup.siteArea
                }
                numberOfBuildings={
                  propertyDetails &&
                  propertyDetails.propertyGroup.numberOfBuildings
                }
                numberOfUnits={
                  propertyDetails && propertyDetails.propertyGroup.numberOfUnits
                }
                numberOfFloors={
                  propertyDetails &&
                  propertyDetails.propertyGroup.numberOfFloors
                }
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.seperator3} />
      <div className={classes.seperator2} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={5} xl={5} lg={5} sm={12} flexDirection="row">
            <Box align="left" display="flex" flexDirection="column">
              {/* <Typography className={classes.tabTitleText}>
                {t("Additional Information")}
              </Typography>
              <AdditionalInformationTabBar
                constructionStartDate={
                  propertyDetails &&
                  propertyDetails.propertyGroup.constructionStartDate
                }
                constructionEndDate={
                  propertyDetails &&
                  propertyDetails.propertyGroup.constructionEndDate
                }
                roomPerFloor={
                  propertyDetails && propertyDetails.propertyGroup.roomPerFloor
                }
                parkingLevel={
                  propertyDetails && propertyDetails.propertyGroup.parkingLevel
                }
                parkingUnit={
                  propertyDetails && propertyDetails.propertyGroup.parkingUnit
                }
                projectName={
                  propertyDetails && propertyDetails.propertyGroup.projectName
                }
                developedBy={
                  propertyDetails && propertyDetails.propertyGroup.developedBy
                }
                managedBy={
                  propertyDetails && propertyDetails.propertyGroup.managedBy
                }
                siteArea={
                  propertyDetails && propertyDetails.propertyGroup.siteArea
                }
                numberOfBuildings={
                  propertyDetails &&
                  propertyDetails.propertyGroup.numberOfBuildings
                }
                numberOfUnits={
                  propertyDetails && propertyDetails.propertyGroup.numberOfUnits
                }
                numberOfFloors={
                  propertyDetails &&
                  propertyDetails.propertyGroup.numberOfFloors
                }
              /> */}
              {/* <Typography className={classes.tabTitleText}>
                Neighborhood
              </Typography> */}

              {/* <NeighborhoodTabBar
                neighbourhoods={
                  propertyDetails &&
                  propertyDetails.propertyGroup.neighbourhoods
                }
              /> */}

              <div className={classes.seperator3} />
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
            <Box
              style={{
                position: "sticky",
                top: 130,
              }}
            >
              {/* <Container maxWidth="xl">
                <Typography>{t("Property Location")}</Typography>
                <GoogleMap
                  latitude={
                    propertyDetails && propertyDetails.propertyGroup.latitude
                  }
                  longitude={
                    propertyDetails && propertyDetails.propertyGroup.longitude
                  }
                />
              </Container> */}
            </Box>
          </Grid>
        </Grid>
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
    </div>
  );
};
export default ApartmentDetailsUI;
