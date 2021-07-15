import React from "react";
import {
  Box,
  Typography,
  makeStyles,
  Container,
  Grid,
  ButtonBase,
} from "@material-ui/core";
import colors from "../../config/colors";
import _ from "lodash";
const useStyles = makeStyles({
  topBackground: { marginBottom: 20 },
  titleContainer: {
    display: "flex",
    backgroundColor: "#F2F2F2",
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.primary,
    marginTop: 10,
  },
  partnerContainer: {
    display: "flex",
    backgroundColor: "#F2F2F2",
    padding: 20,
    flexDirection: "column",
    borderRadius: 5,
  },
  partnerDesc: {
    textAlign: "justify",
    maxLines: "[none| 2]",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 7 /* number of lines to show */,
    "-webkit-box-orient": "vertical",
    color: colors.primary,
  },
  readMoreBtn: {
    display: "flex",
    padding: 10,
    backgroundColor: colors.cerise,
    marginTop: 10,
    // flexGrow: 2,
    color: colors.white,
    borderRadius: 5,
    fontSize: 14,
  },
});
const partner = ["", "", "", ""];
const PartnershipUI = (props) => {
  const { onReadMoreClick } = props;
  const classes = useStyles();
  return (
    <div>
      <Box
        className={classes.topBackground}
        height={400}
        style={{
          backgroundImage: 'url("/images/bg_1.jpg")',
          backgroundPosition: "top",
          backgroundColor: "#a6a6a6",
          backgroundBlendMode: "multiply",
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
          Partnership
        </Typography>
      </Box>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title}>Glass</Typography>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {_.map(partner, () => {
            return (
              <Grid item xl={6} lg={6} md={6}>
                <Box className={classes.partnerContainer}>
                  <Grid container spacing={3}>
                    <Grid item xl={5} lg={5} md={5}>
                      <img
                        alt="logo"
                        style={{ width: "100%" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"
                      />
                    </Grid>
                    <Grid item xl={7} lg={7} md={7}>
                      <Typography className={classes.partnerDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Elit sed vulputate mi sit amet mauris.
                        Elit sed vulputate mi sit amet mauris commodo quis
                        imperdiet. Platea dictumst quisque sagittis purus sit.
                        Sagittis id consectetur purus ut faucibus.
                      </Typography>
                      <ButtonBase
                        className={classes.readMoreBtn}
                        onClick={onReadMoreClick}
                      >
                        See More
                      </ButtonBase>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default PartnershipUI;
