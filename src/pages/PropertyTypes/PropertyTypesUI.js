import React from "react";
import PropertyTypesCard from "./PropertyTypesCard";
import _ from "lodash";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import colors from "../../config/colors";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";

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
    [theme.breakpoints.only("xs")]: {
      height: 250,
    },
  },
}));
const types = [
  { img: "/images/condo.png", type: "Condo", value: "condo" },
  { img: "/images/land.png", type: "Land", value: "land" },
  { img: "/images/mall.jpg", type: "Mall", value: "mall" },
  { img: "/images/building.jpg", type: "Building", value: "building" },
  { img: "/images/office.jpg", type: "Office", value: "office" },
  { img: "/images/villa.png", type: "Villa", value: "villa" },
  { img: "/images/warehouse.png", type: "Warehouse", value: "warehouse" },
  { img: "/images/shophouse.jpg", type: "Shophouse", value: "shophouse" },
  { img: "/images/apartment.jpg", type: "Apartment", value: "apartment" },
  { img: "/images/townhouse.jpg", type: "Townhouse", value: "Townhouse" },
];
const PropertyTypesUI = (props) => {
  const { t } = useTranslation();

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
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#a6a6a6",
          backgroundBlendMode: "multiply",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <div style={{ height: 20 }} />
        <Typography className={classes.titleText}>
          {t("Pick a Property Type")}
        </Typography>
      </Box>
      <Container maxWidth={"lg"} style={{ marginTop: 30, marginBottom: 30 }}>
        <Grid container spacing={4}>
          {_.map(types, (type) => {
            return (
              <Grid item xs={6} md={4} sm={6} lg={4} xl={4}>
                <PropertyTypesCard
                  onCardPress={() => {
                    setPropertyContext({
                      ...propertyContext,
                      selectedSubPropertyType: type.value,
                    });
                    history.push("/Commune");
                  }}
                  spaceImage={type.img}
                  propertyTypes={type.type}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default PropertyTypesUI;
