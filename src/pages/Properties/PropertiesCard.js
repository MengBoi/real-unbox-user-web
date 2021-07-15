import React from "react";

import {
  // Button,
  CardMedia,
  Box,
  // Container,
  Typography,
  CardContent,
  // CardActions,
  CardActionArea,
  Card,
  makeStyles,
  Paper,
  Grid,
} from "@material-ui/core";
import colors from "../../config/colors";
import { useTranslation } from "react-i18next";
import {
  HotelRounded,
  RoomRounded,
  LocationCityRounded,
  AspectRatioRounded,
  ExploreRounded,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  // cardContainer: {
  //   marginLeft: 20,
  //   marginRight: 20,

  //   [theme.breakpoints.down("md")]: {
  //     marginLeft: 5,
  //     marginRight: 5,
  //   },
  // },
  dealTypeContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
    color: colors.white,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
    textTransform: "capitalize",
  },
  projectName: {
    fontWeight: "500",
    fontSize: 16,
    color: colors.primary,
    [theme.breakpoints.only("xs")]: {
      fontSize: 14,
    },
  },
  desc: {
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
  },
  roomRounded: {
    marginBottom: 4,
    marginRight: 4,
    color: colors.cerise,
  },
  price: { fontWeight: "bold", fontSize: 16, paddingTop: 20 },
}));

export default function PropertiesCard(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    spaceImage,
    dealType,
    price,
    name,
    numberOfBedrooms,
    location,
    onClick,
    floor,
    area,
    orientation,
  } = props;
  return (
    <Card className={classes.cardContainer}>
      <CardActionArea disableTouchRipple onClick={onClick}>
        <Box display="flex" style={{ position: "relative" }}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height={250}
            image={spaceImage}
            title="Contemplative Reptile"
          />
        </Box>
        <CardContent>
          <Grid container spacing={2} flexDirection="row">
            <Grid item xs={9} md={10} sm={10} xl={10} lg={10}>
              <Typography
                // variant="h5"
                noWrap
                className={classes.projectName}
                align="left"
              >
                {name}
              </Typography>
            </Grid>
            <Grid item xs={3} md={2} sm={2} xl={2} lg={2}>
              <Paper
                style={{
                  backgroundColor:
                    dealType === "rent" ? colors.fireBrick : colors.cerise,
                }}
                className={classes.dealTypeContainer}
                elevation={0}
              >
                {t(dealType)}
              </Paper>
            </Grid>
          </Grid>
          <div style={{ height: 8 }} />
          <Box display="flex" alignItems="center">
            <RoomRounded className={classes.roomRounded} />
            <Typography className={classes.desc}>{t(location)}</Typography>
          </Box>
          <div style={{ height: 3 }} />
          {numberOfBedrooms && (
            <Box display="flex" alignItems="center">
              <HotelRounded
                style={{
                  marginBottom: 4,
                  marginRight: 4,
                  color: colors.cerise,
                }}
              />
              <Typography className={classes.desc}>
                {numberOfBedrooms}{" "}
                {numberOfBedrooms <= 1 ? t("Bedroom") : t("Bedrooms")}
              </Typography>
            </Box>
          )}

          <div style={{ height: 3 }} />
          {floor && (
            <Box display="flex" alignItems="center">
              <LocationCityRounded
                style={{
                  marginBottom: 4,
                  marginRight: 4,
                  color: colors.cerise,
                }}
              />
              <Typography className={classes.desc}>
                {t("Floor Rank")}
                {floor}
                {floor === 1
                  ? t("st ")
                  : floor === 2
                  ? t("nd ")
                  : floor === 3
                  ? t("rd ")
                  : t("th ")}
                {t("Floor")}
              </Typography>
            </Box>
          )}
          <div style={{ height: 3 }} />
          <Box display="flex" alignItems="center">
            <AspectRatioRounded
              style={{ marginBottom: 4, marginRight: 4, color: colors.cerise }}
            />
            <Typography className={classes.desc}>
              {area} m<sup style={{ fontSize: 13 }}>2</sup>
            </Typography>
          </Box>
          <div style={{ height: 3 }} />
          <Box display="flex" alignItems="center">
            <ExploreRounded
              style={{ marginBottom: 4, marginRight: 4, color: colors.cerise }}
            />
            <Typography className={classes.desc}>
              {t("Facing")} {t(orientation)}
            </Typography>
          </Box>
          {!numberOfBedrooms && <div style={{ height: 56 }} />}
          <Box align="center" className={classes.price}>
            ${price && price.toLocaleString()}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
