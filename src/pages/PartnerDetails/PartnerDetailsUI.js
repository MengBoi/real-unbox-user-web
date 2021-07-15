import React from "react";
import {
  Box,
  Typography,
  makeStyles,
  Container,
  Grid,
  Divider,
} from "@material-ui/core";
import colors from "../../config/colors";
import _ from "lodash";
const useStyles = makeStyles({
  topBackground: { marginBottom: 30 },
  logoContainer: {
    // backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    paddingTop: 30,
    paddingBottom: 30,
  },
  companyBackgroundContainer: {
    marginBottom: 40,
  },
  companyName: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "left",
  },
  companyDesc: {
    textAlign: "justify",
    color: colors.primary,
  },
  titleOfEachSection: {
    textAlign: "center",
    padding: 30,
    marginBottom: 30,
    // textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.primary,
    backgroundColor: "#F2F2F2",
  },
  containerOfEachSection: {
    marginBottom: 30,
  },
});
const partner = ["", "", "", ""];
const PartnerDetailsUI = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        className={classes.topBackground}
        height={350}
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
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", color: colors.white, marginTop: 30 }}
        >
          See More
        </Typography>
      </Box>
      <Container maxWidth="lg" className={classes.companyBackgroundContainer}>
        <Grid container spacing={3}>
          <Grid item xl={5} lg={5} md={5} className={classes.logoContainer}>
            <img
              alt="logo"
              style={{ width: "50%" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"
            />
          </Grid>
          <Grid item xl={7} lg={7} md={7}>
            <Typography className={classes.companyName}>Facebook</Typography>
            <Divider style={{ marginBottom: 5 }} />
            <Typography className={classes.companyDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
              sed vulputate mi sit amet mauris. Elit sed vulputate mi sit amet
              mauris commodo quis imperdiet. Platea dictumst quisque sagittis
              purus sit. Sagittis id consectetur purus ut faucibus.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.titleOfEachSection}>Product Line</Box>
      <Container maxWidth="lg" className={classes.containerOfEachSection}>
        <Grid container spacing={3}>
          {_.map(partner, () => {
            return (
              <Grid item xl={4} lg={4} md={4}>
                <img
                  alt="logo"
                  style={{ width: "100%" }}
                  src="https://i2.wp.com/marketbusinessnews.com/wp-content/uploads/2018/05/Product-Line.jpg?fit=726%2C637&ssl=1"
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Box className={classes.titleOfEachSection}>Portfolio Client</Box>
      <Container maxWidth="lg" className={classes.containerOfEachSection}>
        <Grid container spacing={3}>
          {_.map(partner, () => {
            return (
              <Grid item xl={4} lg={4} md={4}>
                <img
                  alt="logo"
                  style={{ width: "100%" }}
                  src="https://i2.wp.com/marketbusinessnews.com/wp-content/uploads/2018/05/Product-Line.jpg?fit=726%2C637&ssl=1"
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
export default PartnerDetailsUI;
