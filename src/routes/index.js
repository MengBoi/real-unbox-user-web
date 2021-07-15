import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
// import { browserHistory } from "./react-router";
import { useTranslation } from "react-i18next";
import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Toolbar,
  Box,
  Container,
  AppBar,
  Button,
  Grid,
  Hidden,
  ButtonBase,
  Link,
  Typography,
} from "@material-ui/core";
import LanguagesDropdownMenu from "./LanguagesDropdownMenu";

import colors from "../config/colors";
import Properties from "../pages/Properties/Properties";
import {
  Facebook,
  Instagram,
  MailOutline,

  // ExpandMore,
} from "@material-ui/icons";
import Commune from "../pages/Commune/Commune";
import CondoDetails from "../pages/CondoDetails/CondoDetails";
import BuildingDetails from "../pages/BuildingDetails/BuildingDetails";
import PropertyTypes from "../pages/PropertyTypes/PropertyTypes";
import Service from "../pages/Service/Service";
import Studio from "../pages/Studio/Studio";
// import { createBrowserHistory } from "history";

import Partnership from "../pages/Partnership/Partnership";
import PartnerDetails from "../pages/PartnerDetails/PartnerDetails";
import LandDetails from "../pages/LandDetails/LandDetails";
import ApartmentDetails from "../pages/ApartmentDetails/ApartmentDetails";
import OfficeDetails from "../pages/OfficeDetails/OfficeDetails";
import VillaDetails from "../pages/VillaDetails/VillaDetails";
import TownHouseDetails from "../pages/TownHouseDetails/TownHouseDetails";
import ShopHouseDetails from "../pages/ShopHouseDetails/ShopHouseDetails";
import WareHouseDetails from "../pages/WareHouseDetails/WareHouseDetails";
import MallDetails from "../pages/MallDetails/MallDetails";
import CustomizedDrawer from "./CustomizedDrawer";

// eslint-disable-next-line
const mail = "mailto:" + "real.unbox911@gmail.com";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuIcon: {
    fontSize: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  title: {
    flexGrow: 1,
  },
  bottomBarLogo: {
    width: 600,
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 100,
    },
  },
  mediaContainer: {
    backgroundColor: colors.cerise,
    margin: 10,
    padding: 10,
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: colors.cerise,
      margin: 10,
    },
  },
  bottomBarDescBox: {
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  horizontalSeperator1: { width: 30 },
  btnLetters: {
    fontSize: 14,
    color: "white",
  },
  contactUs: {
    flexDirection: "row",
    alignItems: "center",

    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
    },
  },
  bottomBarDesc: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 20,

    [theme.breakpoints.only("xs")]: {
      fontSize: 14,
      marginTop: 20,
    },
  },
}));

const Routes = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [ratioValue, setRatioValue] = useState(
    localStorage.getItem("languageCodeCache")
      ? localStorage.getItem("languageCodeCache")
      : "en"
  );
  const [languageCode, setLanguageCode] = useState(
    localStorage.getItem("languageCodeCache")
      ? localStorage.getItem("languageCodeCache")
      : "en"
  );
  const { t, i18n } = useTranslation();
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLanguageCode(code);
    localStorage.setItem("languageCodeCache", code);
  };

  const onRatioChange = (event) => {
    setRatioValue(event.target.value);
    changeLanguage(event.target.value);
  };
  useEffect(() => {
    i18n.changeLanguage(languageCode);
    window.scrollTo(0, 0);
    function handleShow() {
      if (window.scrollY > 1) {
        setShow(true);
      } else setShow(false);
    }
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, [pathname]);
  // const history = createBrowserHistory({ forceRefresh: true });
  const history = useHistory();
  const [show, setShow] = useState(false);

  // const goToAboutClick = () => history.push("/About");

  return (
    <div>
      <Hidden smDown>
        <AppBar
          elevation={0}
          position="fixed"
          style={{
            backgroundColor: show
              ? "rgba(25,41,70,0.9)"
              : colors.transparentBackground,
            transition: "background-color 0.5s ease",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <Avatar
                imgProps={{
                  style: { objectFit: "contain", width: 250, height: 250 },
                }}
                src="/images/white-horizontal.png"
                style={{ width: 300, height: 100 }}
              />
              <Box flexGrow={1} />

              <Button
                onClick={() =>
                  // history.push("/")
                  history.push("/")
                }
                style={{
                  color: colors.white,
                  textTransform: "none",
                  width: 150,
                }}
                size="large"
              >
                {t("Home")}
              </Button>
              <Button
                onClick={() =>
                  // history.push("/PropertyTypes")
                  history.push("/Properties")
                }
                style={{
                  color: colors.white,
                  textTransform: "none",
                  width: 150,
                }}
                size="large"
              >
                {t("Properties")}
              </Button>
              {/* <Button
                onClick={() => history.push("/About")}
                style={{
                  color: colors.white,
                  textTransform: "none",
                  width: 150,
                }}
                size="large"
              >
                About Us
              </Button> */}
              <Button
                onClick={() => {
                  history.push("/Studio");
                }}
                style={{
                  color: colors.white,
                  textTransform: "none",
                  width: 150,
                }}
                size="large"
              >
                {t("Studio")}
              </Button>
              {/* <Button
                onClick={() => {
                  history.push("/Partnership");
                }}
                style={{
                  color: colors.white,
                  textTransform: "none",
                  width: 150,
                }}
                size="large"
              >
                {t("Partnership")}
              </Button> */}
              <Button
                onClick={() => {
                  history.push("/Service");
                }}
                style={{
                  color: colors.white,
                  textTransform: "none",
                  width: 150,
                }}
                size="large"
              >
                {t("Services")}
              </Button>
              <LanguagesDropdownMenu
                languageCode={languageCode}
                changeLanguage={changeLanguage}
              />
            </Toolbar>
          </Container>
        </AppBar>
      </Hidden>

      <Hidden mdUp xsDown>
        <AppBar
          elevation={0}
          position="fixed"
          style={{
            backgroundColor: show
              ? colors.primary
              : colors.transparentBackground,
            transition: "background-color 0.5s ease",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <Avatar
                imgProps={{
                  style: { objectFit: "contain", width: 200, height: 200 },
                }}
                src="/images/white-horizontal.png"
                style={{ width: 200, height: 100 }}
              />
              <Box flexGrow={1} />
              <CustomizedDrawer
                ratioValue={ratioValue}
                onRatioChange={onRatioChange}
                onHomeClick={() => {
                  history.push("/");
                }}
                onPropertiesClick={() => {
                  history.push("/Properties");
                }}
                onStudioClick={() => {
                  history.push("/Studio");
                }}
                onPartnershipStudio={() => {
                  history.push("/Partnership");
                }}
                onServiceClick={() => {
                  history.push("/Service");
                }}
              />
            </Toolbar>
          </Container>
        </AppBar>
      </Hidden>
      <Hidden smUp>
        <AppBar
          elevation={0}
          position="fixed"
          style={{
            backgroundColor: show
              ? colors.primary
              : colors.transparentBackground,
            transition: "background-color 0.5s ease",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters variant="regular">
              <Avatar
                imgProps={{
                  style: { objectFit: "contain", width: 150, height: 150 },
                }}
                src="/images/white-horizontal.png"
                style={{ width: 160, height: 80 }}
              />
              <Box flexGrow={1} />

              <CustomizedDrawer
                ratioValue={ratioValue}
                onRatioChange={onRatioChange}
                onHomeClick={() => {
                  history.push("/");
                }}
                onPropertiesClick={() => {
                  history.push("/Properties");
                }}
                onStudioClick={() => {
                  history.push("/Studio");
                }}
                onPartnershipStudio={() => {
                  history.push("/Partnership");
                }}
                onServiceClick={() => {
                  history.push("/Service");
                }}
              />
            </Toolbar>
          </Container>
        </AppBar>
      </Hidden>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/About">
          <About />
        </Route> */}
        <Route exact path="/Properties">
          <Properties />
        </Route>
        <Route exact path="/Commune">
          <Commune />
        </Route>
        <Route exact path="/CondoDetails/:id">
          <CondoDetails />
        </Route>
        <Route exact path="/PropertyTypes">
          <PropertyTypes />
        </Route>

        <Route exact path="/Partnership">
          <Partnership />
        </Route>
        <Route exact path="/Service">
          <Service />
        </Route>
        <Route exact path="/Studio">
          <Studio />
        </Route>
        <Route exact path="/BuildingDetails/:id">
          <BuildingDetails />
        </Route>
        <Route exact path="/PartnerDetails">
          <PartnerDetails />
        </Route>
        <Route exact path="/LandDetails">
          <LandDetails />
        </Route>
        <Route exact path="/ApartmentDetails/:id">
          <ApartmentDetails />
        </Route>
        <Route exact path="/OfficeDetails">
          <OfficeDetails />
        </Route>
        <Route exact path="/VillaDetails">
          <VillaDetails />
        </Route>
        <Route exact path="/TownHouseDetails">
          <TownHouseDetails />
        </Route>
        <Route exact path="/ShopHouseDetails">
          <ShopHouseDetails />
        </Route>
        <Route exact path="/WareHouseDetails">
          <WareHouseDetails />
        </Route>
        <Route exact path="/MallDetails">
          <MallDetails />
        </Route>
      </Switch>
      <Grid
        container
        style={{
          backgroundColor: colors.primary,
          paddingTop: 50,
          paddingBottom: 50,
        }}
        alignItems="center"
      >
        <Grid item md={4} lg={4} sm={4} xs={12}>
          <Box flexDirection="column" display="flex" alignItems="center">
            <Avatar
              className={classes.bottomBarLogo}
              imgProps={{
                style: { objectFit: "contain" },
              }}
              src="/images/RGB white-official.png"
            />
            <Box display="flex" justifyContent="center">
              <Link href="https://www.facebook.com/realunbox">
                <ButtonBase className={classes.mediaContainer}>
                  <Facebook style={{ color: colors.white }} />
                </ButtonBase>
              </Link>
              <Link href="https://www.instagram.com/real_unbox/">
                <ButtonBase className={classes.mediaContainer}>
                  <Instagram style={{ color: colors.white }} />
                </ButtonBase>
              </Link>

              <Link href={mail}>
                <ButtonBase className={classes.mediaContainer}>
                  <MailOutline style={{ color: colors.white }} />
                </ButtonBase>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid lg={1} md={1} sm={1} xs={0} item />
        <Grid lg={7} md={7} sm={7} xs={12} item>
          <Box className={classes.bottomBarDescBox} lineHeight={1.5}>
            <Typography className={classes.bottomBarDesc}>
              Real Unbox
            </Typography>
            {/* <Typography className={classes.bottomBarDesc}>
              {t("ADDRESS")}:{" "}
              {t("41A 51BT SonsomKosal BeoungTompon MeanChey PhnomPenh")}
            </Typography> */}
            <Typography className={classes.bottomBarDesc}>
              {t("Term And Condition")}
            </Typography>
            <Typography className={classes.bottomBarDesc}>
              realunbox@gmail.com
            </Typography>
            <Box display="flex" className={classes.contactUs}>
              <Typography className={classes.bottomBarDesc}>
                {t("Contact Us")}:
              </Typography>
              <div style={{ width: 20 }} />
              <Link href="tel:+885-96--991--1996" underline="none">
                <Typography className={classes.bottomBarDesc}>
                  096-991-1996
                </Typography>
              </Link>
              <div style={{ width: 10 }} />
              <Typography className={classes.bottomBarDesc}>/</Typography>
              <div style={{ width: 10 }} />
              <Link href="tel:+885-11--689--911" underline="none">
                <Typography className={classes.bottomBarDesc}>
                  011-689-911
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Routes;
// You can think of these components as "pages"
// in your app.
