import React from "react";
import { useTranslation } from "react-i18next";
import {
  // Button,
  CardMedia,
  Box,
  // Container,
  // Typography,
  // CardContent,
  // CardActions,
  CardActionArea,
  Card,
  // makeStyles,
  withStyles,
  Paper,
} from "@material-ui/core";
import colors from "../../config/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  propertyTypes: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: "500",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
}));
const CusCardActionArea = withStyles({
  root: {
    "@global": {
      ".MuiPaper-root": {
        transition: "background-color 0.5s ease",
        backgroundColor: "white",
        color: "black",
      },
      ".MuiCardMedia-img": {
        transition: "transform .5s",
      },
    },
    "&:hover": {
      boxShadow: "none",

      "@global": {
        ".MuiPaper-root": {
          backgroundColor: colors.cerise,
          color: "white",
        },
        ".MuiCardMedia-img": {
          // filter: "brightness(50%)",
          transform: "scale(1.1) ",
          transition: "transform .5s ease",
        },
      },
    },
  },
})(CardActionArea);

export default function PropertyTypesCard(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const { spaceImage, propertyTypes, onCardPress } = props;
  return (
    <Card>
      <CusCardActionArea onClick={onCardPress}>
        <Box display="flex" style={{ position: "relative" }}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="100%"
            image={spaceImage}
            title="Contemplative Reptile"
          />
          <Box
            style={{
              position: "absolute",
              margin: 15,
              bottom: 0,
              left: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Box>
              <Paper className={classes.propertyTypes} elevation={0}>
                {t(propertyTypes)}
              </Paper>
            </Box>
          </Box>
        </Box>
      </CusCardActionArea>
    </Card>
  );
}
PropertyTypesCard.defaultProps = {
  spaceImage: "",
};
