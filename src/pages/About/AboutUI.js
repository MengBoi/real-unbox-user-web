import {
  Container,
  Typography,
  Grid,
  CardMedia,
  Box,
  Avatar,
} from "@material-ui/core";
import React from "react";
// import Image from "material-ui-image";
import Slider from "infinite-react-carousel";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../config/colors";

const members = [
  {
    img: "/images/ty.png",
    name: "Lor Ty",
    position: "Chief Executive Officer",
  },
  {
    img: "/images/meng.png",
    name: "Aing Earmeng",
    position: "Chief Operating Officer",
  },
  {
    img: "/images/bopich.png",
    name: "Tan Bopich",
    position: "Chief Marketing Officer",
  },
  {
    img: "/images/virith.png",
    name: "Sorn Sokhavirith",
    position: "Chief Technology Officer",
  },
  {
    img: "/images/lyhour.png",
    name: "Veng Lyhour",
    position: "Graphic Designer",
  },
  {
    img: "/images/meng-buck.png",
    name: "Chea Kongmeng",
    position: "Media Manager",
  },
];

const featuredImagesCarouselSettings = {
  arrows: false,
  dots: true,
  slidesToShow: 3,
  virtualList: true,
  overScan: 2,
  adaptiveHeight: true,
};
const useStyles = makeStyles({
  container: {
    border: 0,
    borderRadius: 3,
    padding: 25,
    backgroundColor: colors.white,
    // height: 50,
    // width: 100,
  },
  chiefContainer: { backgroundColor: colors.lightGrey },
  ourTeamText: {
    fontSize: 50,
    fontWeight: "500",
    color: colors.primary,
  },
  realUnboxText: {
    fontSize: 50,
    fontWeight: "500",
    color: colors.primary,
    paddingTop: 10,
    paddingBottom: 10,
  },
  nameText: {
    color: colors.primary,
    fontSize: 22,
  },
  positionText: {
    color: colors.grey,
  },
  // slider: {
  //   backgroundColor: colors.grey,
  // },
  desc: {
    color: colors.primary,
    fontSize: 25,
  },
});
const AboutUI = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        height={500}
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
          About Us
        </Typography>
      </Box>

      <Box align="left" style={{ backgroundColor: colors.lightGrey2 }}>
        <div style={{ height: 50 }} />
        <Typography className={classes.realUnboxText} align="center">
          Real Unbox
        </Typography>

        <Container maxWidth="lg">
          <Typography className={classes.desc} align="center">
            A real estate brokerage and consultant team. Our sales agents are
            young, passionate and enthusiastic to help you buy, sell and rent
            both commercial and residential properties.
          </Typography>
        </Container>
        <div style={{ height: 50 }} />
      </Box>
      <Container maxWidth={"lg"} style={{ marginTop: 30, marginBottom: 30 }}>
        <Grid container spacing={10}>
          <Grid item lg={12}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              src="./images/aboutus.jpg"
              title="Contemplative Reptile"
            />
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.chiefContainer}>
        <div style={{ height: 50 }} />
        <Container maxWidth="lg">
          <Grid container>
            <div style={{ height: 50 }} />
            <Grid item lg={12} className={classes.ourTeamText}>
              Our Team
            </Grid>
            <div style={{ height: 50 }} />

            <Grid item lg={12}>
              <div style={{ height: 50 }} />
              <Slider
                // className={classes.slider}
                {...featuredImagesCarouselSettings}
              >
                {_.map(members, (member) => {
                  return (
                    <Grid item lg={11} xl={11}>
                      <Box className={classes.container}>
                        <Box
                          flexDirection="row"
                          display="flex"
                          alignItems="center"
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src={member.img}
                            style={{
                              width: 100,
                              height: 100,
                            }}
                          />
                          <div style={{ width: 20 }} />
                          <Box align="left">
                            <Typography className={classes.nameText}>
                              {member.name}
                            </Typography>
                            <div style={{ height: 5 }} />
                            <Typography className={classes.positionText}>
                              {member.position}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default AboutUI;
