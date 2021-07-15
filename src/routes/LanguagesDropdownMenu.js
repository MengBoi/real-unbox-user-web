import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import colors from "../config/colors";
import {
  Box,
  Typography,
  CardMedia,
  MenuItem,
  Popper,
  Grow,
  Paper,
  MenuList,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function LanguagesDropdownMenu(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { changeLanguage, languageCode } = props;
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            p={1}
          >
            {languageCode === "en" && (
              <CardMedia
                style={{ width: 50 }}
                component="img"
                alt="Contemplative Reptile"
                src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
                title="Contemplative Reptile"
              />
            )}
            {languageCode === "kh" && (
              <CardMedia
                style={{ width: 50 }}
                component="img"
                alt="Contemplative Reptile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/2560px-Flag_of_Cambodia.svg.png"
                title="Contemplative Reptile"
              />
            )}
            {languageCode === "ch" && (
              <CardMedia
                style={{ width: 50 }}
                component="img"
                alt="Contemplative Reptile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_China.png/1600px-Flag_of_China.png"
                title="Contemplative Reptile"
              />
            )}
            {languageCode === "en" && (
              <Typography style={{ marginLeft: 10, color: colors.white }}>
                EN
              </Typography>
            )}
            {languageCode === "kh" && (
              <Typography style={{ marginLeft: 10, color: colors.white }}>
                KH
              </Typography>
            )}
            {languageCode === "ch" && (
              <Typography style={{ marginLeft: 10, color: colors.white }}>
                CH
              </Typography>
            )}
            <ExpandMore style={{ color: colors.white }} />
          </Box>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={(event) => {
                        changeLanguage("en");
                        handleClose(event);
                      }}
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        p={1}
                      >
                        <CardMedia
                          style={{ width: 50 }}
                          component="img"
                          alt="Contemplative Reptile"
                          src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
                          title="Contemplative Reptile"
                        />

                        <Typography
                          style={{ marginLeft: 10, color: colors.black }}
                        >
                          English
                        </Typography>
                        <ExpandMore style={{ color: colors.white }} />
                      </Box>
                    </MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        changeLanguage("kh");
                        handleClose(event);
                      }}
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        p={1}
                      >
                        <CardMedia
                          style={{ width: 50 }}
                          component="img"
                          alt="Contemplative Reptile"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/2560px-Flag_of_Cambodia.svg.png"
                          title="Contemplative Reptile"
                        />

                        <Typography
                          style={{ marginLeft: 10, color: colors.black }}
                        >
                          ភាសាខ្មែរ
                        </Typography>
                        <ExpandMore style={{ color: colors.white }} />
                      </Box>
                    </MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        changeLanguage("ch");
                        handleClose(event);
                      }}
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        p={1}
                      >
                        <CardMedia
                          style={{ width: 50 }}
                          component="img"
                          alt="Contemplative Reptile"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_China.png/1600px-Flag_of_China.png"
                          title="Contemplative Reptile"
                        />

                        <Typography
                          style={{ marginLeft: 10, color: colors.black }}
                        >
                          中文
                        </Typography>
                        <ExpandMore style={{ color: colors.white }} />
                      </Box>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
