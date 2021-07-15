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
  // Paper,
} from "@material-ui/core";
import Slider from "infinite-react-carousel";
import _ from "lodash";
import Image from "material-ui-image";
import colors from "../../config/colors";
import ReactPlayer from "react-player";
import GoogleMap from "../../components/reusable/GoogleMap";
import { Check, Clear } from "@material-ui/icons";
import AdditionalInformationTabBar from "./components/AdditionalInformationTabBar";
import NeighborhoodTabBar from "./components/NeighborhoodTabBar";

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
    alignItems: "flex-end",
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
  },
  slider: {
    [theme.breakpoints.only("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: 20,
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
}));
const featuredImagesCarouselSettings = {
  arrows: false,
  dots: true,
  slidesToShow: 1,
  virtualList: true,
  overScan: 2,
  adaptiveHeight: true,
};

const MallDetailsUI = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        height={500}
        style={{
          backgroundImage: 'url("/images/bg_1.jpg")',
          backgroundPosition: "top",
          backgroundColor: "#a6a6a6",
          backgroundBlendMode: "multiply",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <div style={{ height: 20 }} />
        <Typography variant="h3" className={classes.title}>
          Property Details
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
                The Peninsula Private Residence
              </Box>

              <Box p={5} pt={3} display="flex" flexDirection="column">
                <Box flexDirection="row" display="flex">
                  <Typography style={{ fontWeight: "bold" }}>ID:</Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>C000021</Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex">
                  <Typography style={{ fontWeight: "bold" }}>
                    Address:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    Keo Chanda Street, Chroy Chongvar District
                  </Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="flex-end">
                  <Typography className={classes.infoIndicatorText}>
                    Size:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    119.28 m<sup style={{ fontSize: 13 }}>2</sup> (Gross)
                  </Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="center">
                  <Typography style={{ fontWeight: "bold" }}>
                    Orientation:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>South</Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="center">
                  <Typography style={{ fontWeight: "bold" }}>Price:</Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>${(300000).toLocaleString()}</Typography>
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
                  <Typography style={{ fontWeight: "bold" }}>Floor:</Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    17<sup style={{ fontSize: 13 }}>th</sup>
                  </Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="center">
                  <Typography style={{ fontWeight: "bold" }}>
                    Contact Number:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>077595990</Typography>
                </Box>

                <div style={{ height: 30 }} />
                <Divider />
                <Grid container>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className={classes.seperator1} />
                    <Typography>For Rent</Typography>
                    <div className={classes.seperator1} />
                    <Typography>Handover Condition</Typography>
                    <div className={classes.seperator1} />
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className={classes.seperator1} />
                    <Typography>Mall Type</Typography>
                    <div className={classes.seperator1} />
                    <Typography>Building Condition</Typography>
                    <div className={classes.seperator1} />
                  </Grid>
                </Grid>
                <Divider />
                <div style={{ height: 30 }} />

                <Grid container>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Typography align="center" className={classes.downPayment}>
                      Deposit
                    </Typography>
                    <Typography
                      align="center"
                      style={{
                        fontSize: 18,
                        // fontWeight: "bold",
                        color: colors.primary,
                      }}
                    >
                      10%
                    </Typography>
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Typography align="center" className={classes.downPayment}>
                      Rent Review
                    </Typography>
                    <Typography
                      align="center"
                      style={{
                        fontSize: 18,
                        // fontWeight: "bold",
                        color: colors.primary,
                      }}
                    >
                      12-month
                    </Typography>
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <Typography align="center" className={classes.downPayment}>
                      Lease Term
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
                  </Grid>
                </Grid>
                <div style={{ height: 30 }} />
                <ButtonBase
                  style={{
                    backgroundColor: colors.cerise,
                    color: colors.white,
                    padding: 20,
                    fontWeight: "100",
                    fontSize: 16,
                    borderRadius: 5,
                  }}
                >
                  BOOK A VISIT
                </ButtonBase>
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
            <Container maxWidth="xl" className={classes.slider}>
              <Slider {...featuredImagesCarouselSettings}>
                {_.map(images, (image) => {
                  return (
                    <Image
                      aspectRatio={16 / 9}
                      src={
                        "http://www.b2b-cambodia.com/wp-content/uploads/2020/07/AEON-Mall-Sen-Sok.jpg"
                      }
                    />
                  );
                })}
              </Slider>
            </Container>

            <Container maxWidth="xl">
              <Typography
                variant="h6"
                align="left"
                className={classes.detailTitle}
              >
                Selected LOT
              </Typography>
              <div className={classes.seperator2} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        LOT Type:
                      </Typography>

                      <Typography>Mall</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Location:
                      </Typography>

                      <Typography>Front</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Size:
                      </Typography>

                      <Typography>
                        119.28 m<sup style={{ fontSize: 13 }}>2</sup> (Gross)
                      </Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Unit Price:
                      </Typography>

                      <Typography>
                        $2,970 per m<sup style={{ fontSize: 13 }}>2</sup>
                      </Typography>
                    </Box>
                    <Hidden smUp>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Total Price:
                        </Typography>

                        <Typography>
                          $2,970 per m<sup style={{ fontSize: 13 }}>2</sup>
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Orientation:
                        </Typography>

                        <Typography>South</Typography>
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
                          Total Price:
                        </Typography>

                        <Typography>
                          $2,970 per m<sup style={{ fontSize: 13 }}>2</sup>
                        </Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Orientation:
                        </Typography>

                        <Typography>South</Typography>
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
                Architectural System
              </Typography>
              <div className={classes.seperator2} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Indoor Furnishing
                      </Typography>
                      <Typography>Full Furniture</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Glass Facade:
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <Hidden smUp>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Ceiling:
                        </Typography>

                        <Typography>Available</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Others:
                        </Typography>

                        <Typography>Car lift system</Typography>
                      </Box>
                    </Hidden>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box align="left">
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Ceiling:
                        </Typography>

                        <Typography>Available</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Others:
                        </Typography>

                        <Typography>Car lift system</Typography>
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
                MEP System
              </Typography>
              <div style={{ height: 20 }} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        CCTV:
                      </Typography>

                      <Check className={classes.checkIcon} />
                    </Box>
                    <div style={{ height: 10 }} />
                    <Divider />
                    <div style={{ height: 10 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Utilities:
                      </Typography>

                      <Check className={classes.checkIcon} />
                    </Box>
                    <div style={{ height: 10 }} />
                    <Divider />
                    <div style={{ height: 10 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Fire Prevention:
                      </Typography>

                      <Check className={classes.checkIcon} />
                    </Box>
                    <div style={{ height: 10 }} />
                    <Divider />
                    <div style={{ height: 10 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Grey Water Line:
                      </Typography>

                      <Clear className={classes.clearIcon} />
                    </Box>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box align="left">
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Oil Filter:
                        </Typography>

                        <Clear className={classes.clearIcon} />
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Central Air Exhaust:
                        </Typography>

                        <Clear className={classes.clearIcon} />
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Lighting System:
                        </Typography>

                        <Clear className={classes.clearIcon} />
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Others:
                        </Typography>

                        <Typography>Co-working Space</Typography>
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
                Financing
              </Typography>
              <div style={{ height: 20 }} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Ownership:
                      </Typography>

                      <Check className={classes.checkIcon} />
                    </Box>
                    <div style={{ height: 10 }} />
                    <Divider />
                    <div style={{ height: 10 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Grace Period:
                      </Typography>

                      <Check className={classes.checkIcon} />
                    </Box>
                    <div style={{ height: 10 }} />
                    <Divider />
                    <div style={{ height: 10 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Share Revenue:
                      </Typography>

                      <Check className={classes.checkIcon} />
                    </Box>
                    <div style={{ height: 10 }} />
                    <Divider />
                    <div style={{ height: 10 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Booking Fee:
                      </Typography>

                      <Clear className={classes.clearIcon} />
                    </Box>
                    <div style={{ height: 10 }} />
                    <Divider />
                    <div style={{ height: 10 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Parking Fee:
                      </Typography>

                      <Clear className={classes.clearIcon} />
                    </Box>
                    <div style={{ height: 10 }} />
                    <Divider />
                    <div style={{ height: 10 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Utilities Fee:
                      </Typography>

                      <Clear className={classes.clearIcon} />
                    </Box>
                    <Hidden smUp>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Deposit:
                        </Typography>

                        <Clear className={classes.clearIcon} />
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Rent Review:
                        </Typography>

                        <Clear className={classes.clearIcon} />
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Lease Term:
                        </Typography>

                        <Clear className={classes.clearIcon} />
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Management Fee:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Miscellaneous Fee:
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
                          Deposit:
                        </Typography>

                        <Clear className={classes.clearIcon} />
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Rent Review:
                        </Typography>

                        <Clear className={classes.clearIcon} />
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Lease Term:
                        </Typography>

                        <Clear className={classes.clearIcon} />
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Management Fee:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div style={{ height: 10 }} />
                      <Divider />
                      <div style={{ height: 10 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Miscellaneous Fee:
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

            <Container maxWidth="xl">{/* google Map */}</Container>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.seperator3} />
      <div className={classes.seperator2} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={5} xl={5} lg={5} sm={12} flexDirection="row">
            <Box align="left" display="flex" flexDirection="column">
              <Typography align="left" className={classes.tabTitleText}>
                Additional Information
              </Typography>
              <AdditionalInformationTabBar />
              <Typography align="left" className={classes.tabTitleText}>
                Neighborhood
              </Typography>
              <NeighborhoodTabBar />
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
              <Container maxWidth="xl">
                <GoogleMap />
              </Container>
            </Box>
          </Grid>
        </Grid>

        {/* <Typography align="left" className={classes.tabTitleText}>
          Additional Information
        </Typography>
        <AdditionalInformationTabBar />
        <Typography align="left" className={classes.tabTitleText}>
          Neighborhood
        </Typography>
        <AdditionalInformationTabBar /> */}
      </Container>
      <div className={classes.seperator3} />
      {/* <Container maxWidth="lg">
        <Typography className={classes.similarUnit}>Similar Units</Typography>
      </Container> */}
      <div className={classes.seperator3} />
    </div>
  );
};
export default MallDetailsUI;
