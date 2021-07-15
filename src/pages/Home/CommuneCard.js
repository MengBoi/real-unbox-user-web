import React from "react";

import {
  Button,
  CardMedia,
  Box,
  Container,
  Typography,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  makeStyles,
  withStyles,
  Paper,
} from "@material-ui/core";
import colors from "../../config/colors";

const CusCardActionArea = withStyles({
  root: {
    "@global": {
      ".MuiPaper-root": {
        transition: "background-color 0.5s ease",
        backgroundColor: "white",
        color: "black",
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
          filter: "brightness(50%)",
        },
      },
    },
  },
})(CardActionArea);

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CommuneCard(props) {
  const classes = useStyles();
  const { spaceImage } = props;
  return (
    <Card className={classes.root}>
      <CusCardActionArea>
        <Box display="flex" style={{ position: "relative" }}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height={425}
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
            <Box style={{ marginBottom: 10 }}>
              <Paper
                style={{
                  // backgroundColor: colors.white,

                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  fontSize: 16,
                  // color: colors.primary,

                  fontWeight: "500",
                }}
                elevation={0}
              >
                Miami
              </Paper>
            </Box>
            <Box>
              <Paper
                style={{
                  backgroundColor: colors.white,

                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  fontSize: 16,
                  color: colors.primary,

                  fontWeight: "500",
                }}
                elevation={0}
              >
                24 Properties
              </Paper>
            </Box>
          </Box>
        </Box>
      </CusCardActionArea>
    </Card>
  );
}
CommuneCard.defaultProps = {
  spaceImage: "",
};
