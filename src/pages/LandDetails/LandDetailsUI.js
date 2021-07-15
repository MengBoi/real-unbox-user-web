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
import { useTranslation } from "react-i18next";
import Slider from "infinite-react-carousel";
import _ from "lodash";
import Image from "material-ui-image";
import colors from "../../config/colors";
import ReactPlayer from "react-player";
import GoogleMap from "../../components/reusable/GoogleMap";
// import { Check, Clear } from "@material-ui/icons";

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
  title: {
    fontWeight: "bold",
    color: colors.white,
    [theme.breakpoints.only("xs")]: {
      fontSize: 20,
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

const LandDetailsUI = () => {
  const { t } = useTranslation();
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
                The land name
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
                    Width:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>None</Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="flex-end">
                  <Typography className={classes.infoIndicatorText}>
                    Length:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>None</Typography>
                </Box>
                <div className={classes.seperator1} />
                <Box flexDirection="row" display="flex" alignItems="center">
                  <Typography className={classes.infoIndicatorText}>
                    Area:
                  </Typography>
                  <div className={classes.horizontalSep1} />
                  <Typography>
                    119.28 m<sup style={{ fontSize: 13 }}>2</sup>
                  </Typography>
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
                    <Typography>Commercial Zone</Typography>

                    <div className={classes.seperator1} />
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <div className={classes.seperator1} />
                    <Typography>{t("For Sale")}</Typography>
                    <div className={classes.seperator1} />
                  </Grid>
                </Grid>
                <Divider />
                <div style={{ height: 30 }} />

                <Grid container>
                  <Grid item lg={4} xs={4} sm={4} md={4} xl={4}>
                    <Typography align="center" className={classes.downPayment}>
                      Down Payment
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
                  <Grid item lg={4} xs={4} sm={4} md={4} xl={4}>
                    <Typography align="center" className={classes.downPayment}>
                      Installment
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
                  <Grid item lg={4} xs={4} sm={4} md={4} xl={4}>
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
                      3 years
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
                        "https://opendevelopmentcambodia.net/wp-content/uploads/sites/2/2015/08/5571170652_c58a94d9d6_b.jpg"
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
                General Information
              </Typography>
              <div className={classes.seperator2} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Land Zone:
                      </Typography>

                      <Typography>Commercial</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Location:
                      </Typography>

                      <Typography>Phnom Penh</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Area:
                      </Typography>

                      <Typography>
                        119.28 m<sup style={{ fontSize: 13 }}>2</sup>
                      </Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Width:
                      </Typography>

                      <Typography>50 m</Typography>
                    </Box>
                    <Hidden smUp>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Length:
                        </Typography>

                        <Typography>50 m</Typography>
                      </Box>
                      <div className={classes.seperator1} />

                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Orientation:
                        </Typography>

                        <Typography>10</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Shape:
                        </Typography>

                        <Typography>8</Typography>
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
                      <div className={classes.seperator1} />
                    </Hidden>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box align="left">
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Length:
                        </Typography>

                        <Typography>50 m</Typography>
                      </Box>
                      <div className={classes.seperator1} />

                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Orientation:
                        </Typography>

                        <Typography>10</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Shape:
                        </Typography>

                        <Typography>8</Typography>
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
                      <div className={classes.seperator1} />
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
                Land Boundary
              </Typography>
              <div className={classes.seperator2} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        North:
                      </Typography>
                      <Typography>200</Typography>
                    </Box>

                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        South:
                      </Typography>

                      <Typography>4</Typography>
                    </Box>
                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        West:
                      </Typography>

                      <Typography>Co-working Space</Typography>
                    </Box>
                    <div style={{ height: 5 }} />
                    <Divider />
                    <div style={{ height: 5 }} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        East:
                      </Typography>

                      <Typography>5</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Hidden xsDown>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box align="left">
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          West:
                        </Typography>

                        <Typography>Co-working Space</Typography>
                      </Box>
                      <div style={{ height: 5 }} />
                      <Divider />
                      <div style={{ height: 5 }} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          East:
                        </Typography>

                        <Typography>5</Typography>
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
                Facilities
              </Typography>
              <div className={classes.seperator2} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Utilities
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Attachment:
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <Hidden smUp>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Transportation:
                        </Typography>

                        <Typography>None</Typography>
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
                          Transportation:
                        </Typography>

                        <Typography>None</Typography>
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
                Financing
              </Typography>
              <div className={classes.seperator2} />
              <Grid container spacing={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Box align="left">
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Ownership
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Asking Price:
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Downpayment:
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Installment:
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <div className={classes.seperator1} />
                    <Divider />
                    <div className={classes.seperator1} />
                    <Box className={classes.detailTextContainer}>
                      <Typography className={classes.infoIndicatorText}>
                        Miscellaneous Fees:
                      </Typography>
                      <Typography>None</Typography>
                    </Box>
                    <Hidden smUp>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Deal Type:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Booking Fee:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Deposit:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Rent Review:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Lease Term:
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
                          Deal Type:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Booking Fee:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Deposit:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Rent Review:
                        </Typography>

                        <Typography>None</Typography>
                      </Box>
                      <div className={classes.seperator1} />
                      <Divider />
                      <div className={classes.seperator1} />
                      <Box className={classes.detailTextContainer}>
                        <Typography className={classes.infoIndicatorText}>
                          Lease Term:
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
export default LandDetailsUI;
