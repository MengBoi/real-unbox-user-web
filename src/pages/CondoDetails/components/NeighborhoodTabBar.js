import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Tabs, Tab, Typography, Box, makeStyles } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 400,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  verticalSeperator1: { height: 10 },
  horizontalSeperator1: { width: 10 },

  tabPanelContainer: { paddingLeft: 10 },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const { neighbourhoods } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        scrollButtons="off"
      >
        {_.map(neighbourhoods, ({ neighbourhood, index }) => {
          // console.log("index", index);
        })}
        <Tab label="School" {...a11yProps(0)} />
        <Tab label="Financial Institution" {...a11yProps(1)} />
        <Tab label="Hospital" {...a11yProps(2)} />
        <Tab label="Gas Station" {...a11yProps(3)} />
        <Tab label="Convenient Stores" {...a11yProps(4)} />
        <Tab label="Food" {...a11yProps(5)} />
        <Tab label="Drinks" {...a11yProps(6)} />
        <Tab label="Super Market" {...a11yProps(7)} />
        <Tab label="University" {...a11yProps(8)} />
        <Tab label="Tech Shop" {...a11yProps(9)} />
        <Tab label="Sport Shop" {...a11yProps(10)} />
        <Tab label="Landmark" {...a11yProps(11)} />
        <Tab label="Garage" {...a11yProps(12)} />
        <Tab label="Police Station" {...a11yProps(13)} />
        <Tab label="Shopping Mall" {...a11yProps(14)} />
        <Tab label="Others" {...a11yProps(15)} />
      </Tabs>

      <TabPanel value={value} index={0} className={classes.tabPanelContainer}>
        <Typography>ACELEDA</Typography>
        <div className={classes.verticalSeperator1} />
        <Typography>ABA</Typography>
        <div className={classes.verticalSeperator1} />
        <Typography>Chipmong</Typography>
        <div className={classes.verticalSeperator1} />
        <Typography>ACELEDA</Typography>
        <div className={classes.verticalSeperator1} />
        <Typography>ABA</Typography>
        <div className={classes.verticalSeperator1} />
        <Typography>Chipmong</Typography>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanelContainer}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanelContainer}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabPanelContainer}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.tabPanelContainer}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5} className={classes.tabPanelContainer}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6} className={classes.tabPanelContainer}>
        Item Seven
      </TabPanel>
    </div>
  );
}
