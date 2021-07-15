import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import moment from "moment";
import colors from "../../../config/colors";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  // Container,
  // Grid,
  Box,
  // Avatar,
  // ButtonBase,
  Divider,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  seperator1: { height: 10 },
  detailTextContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  infoIndicatorText: {
    fontWeight: "bold",
  },
  appBar: {
    backgroundColor: "white",
    color: colors.primary,
  },
  propertyInformationContainer: {
    height: 450,
    [theme.breakpoints.only("sm")]: {
      height: 350,
    },
  },
  companyBackgroundContainer: {
    height: 450,
    [theme.breakpoints.only("sm")]: {
      height: 350,
    },
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    constructionStartDate,
    constructionEndDate,
    roomPerFloor,
    parkingLevel,
    parkingUnit,
    projectName,
    developedBy,
    managedBy,
    siteArea,
    numberOfBuildings,
    numberOfUnits,
    numberOfFloors,
  } = props;

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={t("Property Information")} {...a11yProps(0)} />
          <Tab label={t("Company Background")} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          className={classes.propertyInformationContainer}
        >
          <Box align="left">
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Construction Start")}:
              </Typography>

              <Typography>
                {moment(constructionStartDate).format("DD/MMMM/YYYY")}
              </Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Construction End")}:
              </Typography>

              <Typography>
                {moment(constructionEndDate).format("DD/MMMM/YYYY")}
              </Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Room Per Floor")}:
              </Typography>

              <Typography>
                {roomPerFloor} {t("room")}
                {roomPerFloor !== 0 && t("s")} {t("per floor")}
              </Typography>
            </Box>

            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Parking Level")}:
              </Typography>

              <Typography>{parkingLevel} </Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Parking Units")}:
              </Typography>

              <Typography>{parkingUnit} </Typography>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          className={classes.companyBackgroundContainer}
        >
          <Box align="left">
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Project Name")}:
              </Typography>
              <Typography>{projectName}</Typography>
            </Box>
            {/* <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} /> */}

            {/* <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Project Type:
              </Typography>

              <Typography>Residential Building (static)</Typography>
            </Box> */}
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            {/* <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Developed By")}:
              </Typography>

              <Typography>{developedBy}</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} /> */}
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Managed By")}:
              </Typography>
              <Typography>{managedBy}</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Site Area")}:
              </Typography>
              <Typography>
                {siteArea && siteArea.toLocaleString()} m
                <sup style={{ fontSize: 13 }}>2</sup>
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
                {numberOfFloors} {t("floors")}
              </Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Number of Building")}:
              </Typography>
              <Typography>{numberOfBuildings}</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                {t("Residential Unit")}:
              </Typography>
              <Typography>
                {numberOfUnits} {t("units")}
              </Typography>
            </Box>
          </Box>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
