import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

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
    // backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  seperator1: { height: 10 },
  detailTextContainer: {
    alignItems: "flex-end",
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
  },
  companyBackgroundContainer: {
    height: 450,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
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
          <Tab label="Property Information" {...a11yProps(0)} />
          <Tab label="Company Background" {...a11yProps(1)} />
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
                Owner Nationality:
              </Typography>

              <Typography>Chinese</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Owner Occupation:
              </Typography>

              <Typography>ជាងសំណង់</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Construction Start:
              </Typography>

              <Typography>Aug 2017</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Construction End:
              </Typography>

              <Typography>Jan 2021</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Room Per Floor:
              </Typography>

              <Typography>10 or 8 rooms per floor</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Unit Types:
              </Typography>

              <Typography>Standard & Duplex</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Unit Sizes:
              </Typography>

              <Typography>
                56.16 to 237.27 m<sup style={{ fontSize: 13 }}>2</sup>
              </Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Parking Level:
              </Typography>

              <Typography>6 Levels</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Parking Units:
              </Typography>

              <Typography>110 Units</Typography>
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
                Project Name:
              </Typography>
              <Typography>The Peninsula Private Residence</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Project Address:
              </Typography>

              <Typography>St. Keo Chanda, Chroy Changvar</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Project Type:
              </Typography>

              <Typography>Residential Building</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Developed By:
              </Typography>

              <Typography>C.C Peninsula Co.,Ltd.</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Managed By:
              </Typography>
              <Typography>Tings and Associates</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Gross Area:
              </Typography>
              <Typography>
                1,686 m<sup style={{ fontSize: 13 }}>2</sup>
              </Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Building Height:
              </Typography>
              <Typography>25 storeys Tall and 1 Basement</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Number of Building:
              </Typography>
              <Typography>1</Typography>
            </Box>
            <div className={classes.seperator1} />
            <Divider />
            <div className={classes.seperator1} />
            <Box className={classes.detailTextContainer}>
              <Typography className={classes.infoIndicatorText}>
                Residential Unit:
              </Typography>
              <Typography>155 units</Typography>
            </Box>
          </Box>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
