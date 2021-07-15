import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../config/colors";
import { useTranslation } from "react-i18next";
import {
  Box,
  Container,
  Typography,
  Hidden,
  Grid,

  // ButtonBase,
} from "@material-ui/core";
import Slider from "infinite-react-carousel";

import PropertiesCard from "./PropertiesCard";
import _ from "lodash";
// import CommuneCard from "./CommuneCard";
// import PropertyOwnerModal from "../../components/reusable/PropertyOwnerModal";
import PropertyFindingModal from "../../components/reusable/PropertyFindingModal";
// import { memo } from "react";

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
const useStyles = makeStyles((theme) => ({
  titleBox: {
    height: 600,
    [theme.breakpoints.down("xs")]: { height: 300 },
    [theme.breakpoints.down("sm")]: { height: 330 },
  },
  arrowForwardIos: {
    color: colors.white,
    fontSize: 18,
  },
  routeText: {
    color: colors.white,
    fontSize: 18,
  },
  // searchContainer: {
  //   left: 0,
  //   right: 0,
  //   backgroundColor: colors.primary,
  //   padding: 20,
  //   top: 300,
  //   position: "absolute",
  //   borderRadius: 5,
  //   [theme.breakpoints.only("md")]: {
  //     height: 25,
  //     top: 100,
  //   },
  // },
  verticalSeperator5: {
    height: 50,
    [theme.breakpoints.down("xs")]: {
      height: 25,
    },
  },
  verticalSeperator3: {
    height: 30,
    [theme.breakpoints.down("xs")]: {
      height: 15,
    },
  },
  searchBox: {
    justifyContent: "space-between",
  },
  propertyTypesBox: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 280,
    color: colors.white,
    fontSize: 60,
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
      top: 130,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  propertyTypesBtn: {
    width: "100%",
    height: 60,
    backgroundColor: colors.transCerise,
    borderRadius: 10,
    color: colors.white,
    fontSize: 20,
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
  },
  propertyTitle: {
    fontSize: 40,
    color: colors.primary,
    textTransform: "uppercase",

    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
      fontWeight: "500",
      color: colors.primary,
    },
  },
  comResContainer: {
    paddingLeft: 200,
    paddingRight: 200,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
}));

const HomeUI = (props) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    residentialPropertyTypes,
    commercialPropertyTypes,
    onPropertyClick,
    hotDeals,
    featuredProperties,
    onSubPropertyTypesClick,
    propertyContext,
    setPropertyContext,
    recommendedProperties,
  } = props;
  // console.log("featu", featuredProperties);
  // console.log("hot", hotDeals);
  return (
    <div style={{ marginBottom: 100 }}>
      <Box
        className={classes.titleBox}
        style={{
          backgroundImage: 'url("/images/photo.jpg")',
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
        <Box className={classes.propertyTypesBox}>
          {t("What are you looking for?")}
          <div className={classes.verticalSeperator3} />
          <Container maxWidth="lg">
            <Box className={classes.comResContainer}>
              <Grid container>
                <Grid item lg={2} md={1} sm={1} xs={1} />
                <Grid item lg={4} md={5} sm={5} xs={5}>
                  <PropertyFindingModal
                    onSubPropertyTypesClick={onSubPropertyTypesClick}
                    propertyType={t("commercial")}
                    title={t("Commercial Space")}
                    propertySubTypes={commercialPropertyTypes}
                    setPropertyContext={setPropertyContext}
                    propertyContext={propertyContext}
                  />
                </Grid>
                <Box width={15} />
                <Grid item lg={4} md={5} sm={5} xs={5}>
                  <PropertyFindingModal
                    onSubPropertyTypesClick={onSubPropertyTypesClick}
                    propertyType={t("residential")}
                    title={t("Residential Space")}
                    propertySubTypes={residentialPropertyTypes}
                    setPropertyContext={setPropertyContext}
                    propertyContext={propertyContext}
                  />
                </Grid>
                <Grid item lg={2} md={1} sm={1} xs={1} />
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>

      <div className={classes.verticalSeperator5} />

      <Container maxWidth={"lg"}>
        <Typography className={classes.propertyTitle}>
          {t("Special Offer")}
        </Typography>
        <div className={classes.verticalSeperator5} />
        <Hidden smDown>
          <Slider {...featuredPropertiesCarouselSettings}>
            {_.map(hotDeals, (property) => {
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
            {_.map(hotDeals, (property) => {
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
            {_.map(hotDeals, (property) => {
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
      </Container>
      <Container maxWidth={"lg"} style={{ marginTop: 50 }}>
        <Typography className={classes.propertyTitle}>
          {t("Move In")}
        </Typography>
        <div className={classes.verticalSeperator5} />
        <Hidden smDown>
          <Slider {...featuredPropertiesCarouselSettings}>
            {_.map(hotDeals, (property) => {
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
            {_.map(hotDeals, (property) => {
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
            {_.map(hotDeals, (property) => {
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
      </Container>
      <Container maxWidth={"lg"} style={{ marginTop: 50 }}>
        <Typography className={classes.propertyTitle}>
          {t("Feature Properties")}
        </Typography>
        <div className={classes.verticalSeperator5} />
        <Hidden smDown>
          <Slider {...featuredPropertiesCarouselSettings}>
            {_.map(featuredProperties, (property) => {
              // console.log("fea", featuredProperties);
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
            {_.map(featuredProperties, (property) => {
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
            {_.map(featuredProperties, (property) => {
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
      </Container>
      {recommendedProperties?.length === 0 ? (
        <Typography></Typography>
      ) : (
        <Container maxWidth={"lg"}>
          <Typography className={classes.propertyTitle}>
            {t("Property Recommendation")}
          </Typography>
          <div className={classes.verticalSeperator5} />
          <Hidden smDown>
            <Slider {...featuredPropertiesCarouselSettings}>
              {_.map(recommendedProperties, (property) => {
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
              {_.map(recommendedProperties, (property) => {
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
              {_.map(recommendedProperties, (property) => {
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
        </Container>
      )}
    </div>
  );
};
export default HomeUI;
