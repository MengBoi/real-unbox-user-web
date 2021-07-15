import React from "react";
import CommuneCard from "./CommuneCard";
import _ from "lodash";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import colors from "../../config/colors";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
// import { communeQuery } from "./../../lib/api/Query/CommuneQuery";

const useStyles = makeStyles((theme) => ({
  titleText: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 50,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  titleBox: {
    height: 400,
    [theme.breakpoints.only("sm")]: {
      height: 300,
    },
    [theme.breakpoints.only("xs")]: {
      height: 250,
    },
  },
}));
const CommuneUI = (props) => {
  const { t } = useTranslation();
  const communes = [
    {
      img: "/images/meanchey.jpg",
      commune: t("Mean Chey"),
      value: "mean_chey",
    },
    {
      img: "/images/chamkarmon.jpg",
      commune: t("Chamkarmon"),
      value: "chamkarmon",
    },
    {
      img: "/images/7makara.jpg",
      commune: t("Prampi Makara"),
      value: "prampi_makara",
    },
    { img: "/images/sensok.jpg", commune: t("Sen Sok"), value: "sen_sok" },
    {
      img: "/images/daunpenh.jpg",
      commune: t("Daun Penh"),
      value: "daun_penh",
    },
    { img: "/images/toulkok.jpg", commune: t("Toul Kok"), value: "toul_kok" },
    {
      img: "/images/chroychangvar.jpg",
      commune: t("Chroy Changvar"),
      value: "chroy_changvar",
    },
    {
      img: "/images/ChbarOmpov.jpg",
      commune: t("Chbar Ompov"),
      value: "chbar_ompov",
    },
    {
      img: "/images/BeoungKengKong.jpg",
      commune: t("Beoung Keng Kong"),
      value: "beoung_keng_kong",
    },
  ];
  const { setPropertyContext, propertyContext } = props;
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <Box
        className={classes.titleBox}
        style={{
          backgroundImage: 'url("/images/26.jpg")',
          backgroundPosition: "center",
          backgroundColor: "#8c8c8c",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <div style={{ height: 20 }} />
        <Typography className={classes.titleText}>
          {t("Pick a location")}
        </Typography>
      </Box>
      <Container maxWidth={"lg"} style={{ marginTop: 30, marginBottom: 30 }}>
        <Grid container spacing={4}>
          {_.map(communes, (commune) => {
            return (
              <Grid item xs={6} md={4} sm={6} lg={4} xl={4}>
                <CommuneCard
                  onCardPress={() => {
                    history.push({
                      pathname: "/Properties",
                    });
                    setPropertyContext({
                      ...propertyContext,
                      selectedLocation: commune.value,
                    });
                  }}
                  // onCardPress={() => communeQuery()}
                  spaceImage={commune.img}
                  commune={commune.commune}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default CommuneUI;
