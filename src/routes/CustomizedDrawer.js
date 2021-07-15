import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { Divider, Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FormatListBulletedRounded from "@material-ui/icons/FormatListBulletedRounded";
import HomeRounded from "@material-ui/icons/HomeRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CameraAltRounded from "@material-ui/icons/CameraAltRounded";
import GroupRounded from "@material-ui/icons/GroupRounded";
import EmojiEmotionsRounded from "@material-ui/icons/EmojiEmotionsRounded";
import CustomizedRadio from "./CustomizedRadio";
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuIcon: {
    fontSize: 30,
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
}));

export default function CustomizedDrawer(props) {
  const {
    onHomeClick,
    onPropertiesClick,
    onStudioClick,
    onPartnershipStudio,
    onServiceClick,
    ratioValue,
    onRatioChange,
  } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={onHomeClick} key={"Home"}>
          <ListItemIcon>
            <HomeRounded />
            {/* {index === 1 && <FormatListBulletedRounded />}
            {index === 2 && <CameraAltRounded />}
            {index === 3 && <GroupRounded />}
            {index === 4 && <EmojiEmotionsRounded />} */}
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button onClick={onPropertiesClick} key={"Properties"}>
          <ListItemIcon>
            <FormatListBulletedRounded />
            {/* {index === 2 && <CameraAltRounded />}
            {index === 3 && <GroupRounded />}
            {index === 4 && <EmojiEmotionsRounded />} */}
          </ListItemIcon>
          <ListItemText primary={"Properties"} />
        </ListItem>
        <ListItem button onClick={onStudioClick} key={"Studio"}>
          <ListItemIcon>
            <CameraAltRounded />
          </ListItemIcon>
          <ListItemText primary={"Studio"} />
        </ListItem>
        {/* <ListItem button onClick={onPartnershipStudio} key={"Partnership"}>
          <ListItemIcon>
            <GroupRounded />
          </ListItemIcon>
          <ListItemText primary={"Partnership"} />
        </ListItem> */}
        <ListItem button onClick={onServiceClick} key={"Services"}>
          <ListItemIcon>
            <EmojiEmotionsRounded />
          </ListItemIcon>
          <ListItemText primary={"Services"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Typography>Languages</Typography>
        </ListItem>
        <ListItem>
          <CustomizedRadio
            onRatioChange={onRatioChange}
            ratioValue={ratioValue}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          <MenuIcon className={classes.menuIcon} />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
