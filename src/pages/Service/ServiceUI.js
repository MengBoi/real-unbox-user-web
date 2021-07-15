import {
  Box,
  ButtonBase,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import colors from "../../config/colors";
import PropertyOwnerModal from "./../../components/reusable/PropertyOwnerModal";
// import PropertyFindingModal from "./../../components/reusable/PropertyFindingModal";
import { CameraAlt, FormatListNumbered, Search } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
// import { emphasize } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 40,
    color: "white",
  },
  serviceContainer: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "100%",
    "&:hover": {
      backgroundColor: "#192946",
      borderColor: "#192946",

      "& $iconContainer": {
        backgroundColor: colors.white,
        "& $icon": {
          color: colors.primary,
        },
      },
      "& $serviceTitle": {
        color: colors.white,
      },
      "& $serviceDesc": {
        color: colors.white,
      },
    },
  },
  serviceTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  serviceDesc: { fontSize: 15 },
  titleBox: {
    height: 400,
    [theme.breakpoints.only("xs")]: {
      height: 250,
    },
  },
}));

const ServiceUI = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { onStudioClick, onPropertyFinderClick } = props;
  return (
    <div style={{ backgroundColor: colors.white }}>
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
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", color: colors.white }}
        >
          {t("Services")}
        </Typography>
      </Box>
      <div style={{ height: 30 }} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <ButtonBase onClick={onStudioClick}>
              <Box
                display="flex"
                className={classes.serviceContainer}
                border={1}
                borderColor={colors.primary}
                borderRadius={10}
                p={2}
                pl={3}
                pr={3}
              >
                <Box
                  display="flex"
                  className={classes.iconContainer}
                  p={2}
                  borderRadius="50%"
                >
                  <CameraAlt className={classes.icon} />
                </Box>
                <Typography className={classes.serviceTitle}>
                  Real Unbox {t("Studio")}
                </Typography>
                <Typography className={classes.serviceDesc}>
                  {t(
                    "A Professional Real Estate Photography and cinematography service design to make your property stands out from the rest at a fair price"
                  )}
                  .{" "}
                  {t(
                    "Visit us to learn more about different Real Unbox Studio service categories and check out our portfolio"
                  )}
                  .
                </Typography>
              </Box>
            </ButtonBase>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <PropertyOwnerModal title="Listing my own property">
              <Box
                className={classes.serviceContainer}
                border={1}
                borderColor={colors.primary}
                borderRadius={10}
                p={2}
                pl={3}
                pr={3}
              >
                <Box
                  display="flex"
                  className={classes.iconContainer}
                  p={2}
                  borderRadius="50%"
                >
                  <FormatListNumbered className={classes.icon} />
                </Box>
                <Typography className={classes.serviceTitle}>
                  {t("Listing Box")}
                </Typography>
                <Typography className={classes.serviceDesc}>
                  {t(
                    "Want to Sell or Rent out your property? Go to LISTING BOX"
                  )}
                  .{" "}
                  {t("It is a FREE online market platform for public listing")}.
                  {t(
                    "Click it to send your listing application and start selling/renting your property right away"
                  )}
                  .
                </Typography>
                <PropertyOwnerModal title="Listing my own property" />
              </Box>
            </PropertyOwnerModal>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <ButtonBase onClick={onPropertyFinderClick}>
              <Box
                className={classes.serviceContainer}
                border={1}
                borderColor={colors.primary}
                borderRadius={10}
                p={2}
                pl={3}
                pr={3}
              >
                <Box
                  display="flex"
                  className={classes.iconContainer}
                  p={2}
                  borderRadius="50%"
                >
                  <Search className={classes.icon} />
                </Box>
                <Typography className={classes.serviceTitle}>
                  {t("Property Finder")}
                </Typography>
                <Typography className={classes.serviceDesc}>
                  {t(
                    "Explore your desired space seamlessly on Real Unbox listing database with no pop- up ads to ensure a truly satisfied search experience"
                  )}
                  .
                </Typography>
              </Box>
            </ButtonBase>
          </Grid>
        </Grid>
      </Container>
      {/* <Box
        display="flex"
        pt={5}
        pb={5}
        flexDirection="column"
        style={{ backgroundColor: colors.white }}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            style={{ color: colors.primary, fontWeight: "bold", fontSize: 20 }}
          >
            For property owner
          </Box>
          <div style={{ height: 20 }} />
          <Grid container>
            <Grid item lg={3} md={3} xl={3}>
              <PropertyOwnerModal title="Listing my own property" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div style={{ height: 10 }} />
      <Box
        display="flex"
        pt={5}
        pb={5}
        flexDirection="column"
        style={{ backgroundColor: colors.white }}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            style={{ color: colors.primary, fontWeight: "bold", fontSize: 20 }}
          >
            Finding residential property to
          </Box>
          <div style={{ height: 20 }} />
          <Grid container spacing={5}>
            <Grid item lg={2} md={2} xl={2}>
              <PropertyFindingModal title="Buy" />
            </Grid>
            <Grid item lg={2} md={2} xl={2}>
              <PropertyFindingModal title="Rent" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div style={{ height: 10 }} />
      <Box
        display="flex"
        pt={5}
        pb={5}
        flexDirection="column"
        style={{ backgroundColor: colors.white }}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            style={{ color: colors.primary, fontWeight: "bold", fontSize: 20 }}
          >
            Finding commercial property to
          </Box>
          <div style={{ height: 20 }} />
          <Grid container spacing={5}>
            <Grid item lg={2} md={2} xl={2}>
              <PropertyFindingModal title="Buy" />
            </Grid>
            <Grid item lg={2} md={2} xl={2}>
              <PropertyFindingModal title="Rent" />
            </Grid>
          </Grid>
        </Container>
      </Box> */}
      <div style={{ height: 100 }} />
    </div>
  );
};

export default ServiceUI;
