import { Box, Container, Typography, Grid, Hidden } from "@material-ui/core";
import React from "react";
import colors from "../../config/colors";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import ReactPlayer from "react-player";
import ModalImage from "react-modal-image";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
  root: {},
  overallDescContainer: {
    backgroundColor: "#F2F2F2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  overallDesc: { color: colors.primary, textAlign: "justify", fontSize: 16 },
  hTwen: { width: 20 },
  vTwen: { height: 20 },
  photographyPortfolio: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.primary,
    [theme.breakpoints.only("sm")]: {
      fontSize: 25,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 20,
    },
  },
  imagePort: { borderRadius: 5 },
  vFif: { height: 50 },
  videoDescContainer: { display: "flex", flexDirection: "column" },
  videoTitle: {
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "justify",
  },
  videoDesc: { color: colors.primary, textAlign: "justify" },
  vThir: { height: 30 },
  packageContainer: {
    display: "flex",
    backgroundColor: "#F4F4F4",
    flexDirection: "column",
    borderRadius: 5,
    height: 400,
    padding: 20,
    justifyContent: "space-between",
    [theme.breakpoints.only("xs")]: {
      height: 150,
      padding: 10,
      alignItems: "center",
    },
  },
  packageTitle: {
    fontWeight: "bold",
    fontSize: 25,
    textTransform: "uppercase",
    color: colors.primary,
    [theme.breakpoints.only("xs")]: {
      fontSize: 16,
    },
  },
  packagePrice: {
    fontSize: 30,
    fontWeight: "500",
    color: colors.primary,
  },
  packageDesc: {
    color: colors.primary,
    marginBottom: 5,
  },
  vTenHalf: {
    height: 15,
  },
  vTen: {
    height: 10,
  },
  packageButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.cerise,
    width: "100%",
    borderRadius: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
      width: "50%",
      padding: 10,
    },
  },
  photographyPortfolioDesc: {
    [theme.breakpoints.only("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
  },
  titleContainer: {
    display: "flex",
    backgroundColor: "#F2F2F2",
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: 30,
    color: colors.primary,
  },
  optionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  optionDesc: {
    textAlign: "justify",
    padding: 20,
    // paddingRight: 20,
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
      marginTop: 0,
      padding: 10,
    },
  },
  title: {
    fontWeight: "bold",
    color: colors.white,
    [theme.breakpoints.only("xs")]: {
      fontSize: 30,
    },
  },
  titleBox: {
    height: 400,
    [theme.breakpoints.only("xs")]: {
      height: 250,
    },
  },
}));

const StudioUI = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { exteriorImg, interiorImg, architecturalImg, aerialImg } = props;
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
        <Typography variant="h3" className={classes.title}>
          {t("Studio")}
        </Typography>
        {/* <ButtonBase
          onClick={() => {
            console.log("exteriorImg", exteriorImg);
            console.log("studioData", studioData);
          }}
        >
          fsdklfjsdlkfjsdkl
        </ButtonBase> */}
      </Box>
      <div className={classes.vTen} />
      {/* <Box className={classes.overallDescContainer}>
        <Container maxWidth="lg">
          <Typography className={classes.overallDesc}>
            Your property is understood through fact but it is sold through
            story. It’s a pattern in consumer behavior to rely on feelings to
            make purchasing decision while using fact to justify on that
            emotion. Therefore, your property has to be more than just looking
            good to customers. It has to feel good. Introducing Real Unbox
            Studio, a professional content creator specializes in conveying real
            estate property value directly to target customers through the art
            of real estate photography and videography. With talented crews,
            creative content creators and top class shooting gears, Real Unbox
            Studio is up for any challenges.
          </Typography>
        </Container>
      </Box> */}
      {/* <div className={classes.vTen} /> */}
      <Box className={classes.titleContainer}>
        <Typography className={classes.photographyPortfolio}>
          {t("Exterior Photography")}
        </Typography>
        <div className={classes.vTen} />
        <Container maxWidth="lg">
          <Typography className={classes.photographyPortfolioDesc}>
            {t(
              "First impression is everything and it starts with the face of your property"
            )}
            {t(".")}{" "}
            {t(
              "Exterior photography allows the subject property to be presented professionally from the outside and utilizes surrounding environment to enhance its supremacy"
            )}
            .{" "}
            {t(
              "Real Unbox Studio exterior photographs can easily make your property stand outs from its comparables and grab customer attention in a single glance"
            )}
            .
          </Typography>
        </Container>
      </Box>
      <div className={classes.vThir} />
      <Container maxWidth="lg">
        <Grid
          container
          style={{ display: "flex", flexDirection: "row" }}
          spacing={3}
        >
          {_.map(exteriorImg, (img) => {
            return (
              <Grid item lg={4} xl={4} md={4} sm={6} xs={6} key={img.id}>
                <ModalImage
                  className={classes.modalImage}
                  small={img.imageUrl}
                  large={img.imageUrl}
                  // alt="portfolio"
                  hideDownload={true}
                  hideZoom={true}
                />
              </Grid>
            );
          })}
        </Grid>

        {/* <CustomizedImageGroup /> */}
      </Container>
      <div className={classes.vThir} />
      <Box className={classes.titleContainer}>
        <Typography className={classes.photographyPortfolio}>
          {t("Interior Photography")}
        </Typography>
        <div className={classes.vTen} />
        <Container maxWidth="lg">
          <Typography className={classes.photographyPortfolioDesc}>
            {t(
              "Outside look of your property appeals to the eyes but how it looks inside appeals to the heart"
            )}
            .{" "}
            {t(
              "The coziness feeling in bedroom, finesse organization in kitchen and stunning look in dining room can be illustrated through interior photography"
            )}
            .{" "}
            {t(
              "Every shots are delicately planned, captured and retouched to produce great image quality with zero distortion"
            )}
            .
          </Typography>
        </Container>
      </Box>

      <div className={classes.vThir} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {_.map(interiorImg, (img) => {
            return (
              <Grid item llg={4} xl={4} md={4} sm={6} xs={6} key={img.id}>
                <ModalImage
                  className={classes.modalImage}
                  small={img.imageUrl}
                  large={img.imageUrl}
                  // alt="portfolio"
                  hideDownload={true}
                  hideZoom={true}
                />
              </Grid>
            );
          })}
        </Grid>

        {/* <CustomizedImageGroup /> */}
      </Container>
      <div className={classes.vThir} />
      <Box className={classes.titleContainer}>
        <Typography className={classes.photographyPortfolio}>
          {t("Architectural Style Photography")}
        </Typography>
        <div className={classes.vTen} />
        <Container maxWidth="lg">
          <Typography className={classes.photographyPortfolioDesc}>
            {t("Every detail counts")}.{" "}
            {t(
              "A good wide shot of your property may convey ample space and sheer size however its unique standpoints lie within the fabric of interior design that can separate subject property from its comparables"
            )}
            .{" "}
            {t(
              "Architectural Style photography utilizes notable elements in your room such as furniture, wallpapers, tiles, etc"
            )}
            .{" "}
            {t(
              "and shot them in combination from different angles to produce artistic perspectives"
            )}
            .
          </Typography>
        </Container>
      </Box>
      <div className={classes.vThir} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {_.map(architecturalImg, (img) => {
            return (
              <Grid item lg={4} xl={4} md={4} sm={6} xs={6} key={img.id}>
                <ModalImage
                  className={classes.modalImage}
                  small={img.imageUrl}
                  large={img.imageUrl}
                  // alt="portfolio"
                  hideDownload={true}
                  hideZoom={true}
                />
              </Grid>
            );
          })}
        </Grid>

        {/* <CustomizedImageGroup /> */}
      </Container>
      <div className={classes.vThir} />
      <Box className={classes.titleContainer}>
        <Typography className={classes.photographyPortfolio}>
          {t("Aerial Photography")}
        </Typography>
        <div className={classes.vTen} />
        <Container maxWidth="lg">
          <Typography className={classes.photographyPortfolioDesc}>
            {t("The sky is the limit for Aerial photography")}.{" "}
            {t(
              "With the latest drone technology, our experienced drone pilots can shot subject property up 500 meters high in 48 megapixel image resolution"
            )}
            .{" "}
            {t(
              "Customers will see your property differently in the sky compare to what they have seen on the ground"
            )}
            .
          </Typography>
        </Container>
      </Box>
      <div className={classes.vThir} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {_.map(aerialImg, (img) => {
            return (
              <Grid item lg={4} xl={4} md={4} sm={6} xs={6} key={img.id}>
                <ModalImage
                  className={classes.modalImage}
                  small={img.imageUrl}
                  large={img.imageUrl}
                  // alt="portfolio"
                  hideDownload={true}
                  hideZoom={true}
                />
              </Grid>
            );
          })}
        </Grid>

        {/* <CustomizedImageGroup /> */}
      </Container>
      <div className={classes.vThir} />
      <Box className={classes.titleContainer}>
        <Typography className={classes.photographyPortfolio}>
          {t("Standard Videography")}
        </Typography>
        <div className={classes.vTen} />
        <Container maxWidth="lg">
          <Typography className={classes.photographyPortfolioDesc}>
            {t("Simplicity doesn't mean ordinary")}.{" "}
            {t(
              "Real Unbox Studio standard videography is a quick service which offer a professional look around real estate property from inside out"
            )}
            .{" "}
            {t(
              "We utilized advanced stedicam gimble system technology behind the scene to record your property at a frame rate between 60 to 120 frames per second resulting in a smooth, sharp and steady video quality"
            )}
            .
          </Typography>
        </Container>
      </Box>
      <div className={classes.vThir} />
      <Container maxWidth="lg">
        <Hidden smDown>
          <ReactPlayer
            height={600}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=Ae6dC7KwWsQ&feature=youtu.be"
          />
        </Hidden>
        <Hidden mdUp xsDown>
          <ReactPlayer
            height={350}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=Ae6dC7KwWsQ&feature=youtu.be"
          />
        </Hidden>
        <Hidden smUp>
          <ReactPlayer
            height={200}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=Ae6dC7KwWsQ&feature=youtu.be"
          />
        </Hidden>
      </Container>
      <div className={classes.vThir} />
      <Box className={classes.titleContainer}>
        <Typography className={classes.photographyPortfolio}>
          {t("Cinematic Sequence")}
        </Typography>
        <div className={classes.vTen} />
        <Container maxWidth="lg">
          <Typography className={classes.photographyPortfolioDesc}>
            {t("Story makes all the difference")}.{" "}
            {t("Not only is it enjoyable but also memorable")}.{" "}
            {t(
              "A well composed storyline, talented model(s), experienced crews and adequate gears are our arsenals in stepping up your property value toward cinematic level"
            )}
            .{" "}
            {t(
              "In addition, Real Unbox Studio has copyright to all sound effects and background music used in film production so you can broadcast and monetize your final video on any social media platforms such as Facebook or Youtube"
            )}
            .
          </Typography>
        </Container>
      </Box>
      <div className={classes.vThir} />
      <Container maxWidth="lg">
        <Hidden smDown>
          <ReactPlayer
            height={600}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=CWBgyhXVa4g&feature=youtu.be"
          />
        </Hidden>
        <Hidden mdUp xsDown>
          <ReactPlayer
            height={350}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=CWBgyhXVa4g&feature=youtu.be"
          />
        </Hidden>
        <Hidden smUp>
          <ReactPlayer
            height={200}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=CWBgyhXVa4g&feature=youtu.be"
          />
        </Hidden>
      </Container>
      <div className={classes.vThir} />
      <Box className={classes.titleContainer}>
        <Typography className={classes.photographyPortfolio}>
          {t("Property Unbox")}
        </Typography>
        <div className={classes.vTen} />
        <Container maxWidth="lg">
          <Typography className={classes.photographyPortfolioDesc}>
            {t("A detail property tour made fun to watch")}.{" "}
            {t(
              "Property Unbox is a signature service at Real Unbox Studio because we began our career by giving a tour guide to our customers from one real estate  property to another understanding its general specification as well as discovering individual unique features"
            )}
            .{" "}
            {t(
              "Our trained and enthusiastic sales agent(s) will be casted as the actor/actress in unboxing your property to the public because he or she both knew how and what to talk"
            )}
            .
          </Typography>
        </Container>
      </Box>
      <div className={classes.vThir} />
      <Container maxWidth="lg">
        <Hidden smDown>
          <ReactPlayer
            height={600}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=wuQhGkR6TOw&feature=youtu.be"
          />
        </Hidden>
        <Hidden mdUp xsDown>
          <ReactPlayer
            height={350}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=wuQhGkR6TOw&feature=youtu.be"
          />
        </Hidden>
        <Hidden smUp>
          <ReactPlayer
            height={200}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=wuQhGkR6TOw&feature=youtu.be"
          />
        </Hidden>
      </Container>
      <div className={classes.vThir} />
      <Box className={classes.titleContainer}>
        <Typography className={classes.photographyPortfolio}>
          {t("Aerial Videography")}
        </Typography>
        <div className={classes.vTen} />
        <Container maxWidth="lg">
          <Typography className={classes.photographyPortfolioDesc}>
            {t(
              "Real Unbox Studio often use drones to employ aerial footage in all videography services for 2 good reasons"
            )}
            .{" "}
            {t(
              "One being the differences it can make from enabling audiences to see a real estate property from birds eye view"
            )}
            .{" "}
            {t(
              "Another given the extra details aerial footage can provide by viewing from up high"
            )}
            .{" "}
            {t(
              "Aerial Videography is available as standalone service which is great for open houses, showcasing construction site or even as a trailer video for an upcoming project listing"
            )}
            .
          </Typography>
        </Container>
      </Box>
      <div className={classes.vThir} />
      <Container maxWidth="lg">
        <Hidden smDown>
          <ReactPlayer
            height={600}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=vP-OD33IJQs&feature=youtu.be"
          />
        </Hidden>
        <Hidden mdUp xsDown>
          <ReactPlayer
            height={350}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=vP-OD33IJQs&feature=youtu.be"
          />
        </Hidden>
        <Hidden smUp>
          <ReactPlayer
            height={200}
            width="auto"
            controls={true}
            url="https://www.youtube.com/watch?v=vP-OD33IJQs&feature=youtu.be"
          />
        </Hidden>
      </Container>
      {/*  */}
      {/* <div className={classes.vTwen} />
      <Box style={{ backgroundColor: "#F2F2F2" }}>
        <div className={classes.vTen} />
        <Typography className={classes.photographyPortfolio}>
          PRICING OPTIONS
        </Typography>
        <div className={classes.vTen} />
      </Box>
      <div className={classes.vTwen} />
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.optionContainer}>
          <Grid item xl={4} lg={4} md={4}>
            <Box className={classes.packageContainer}>
              <div>
                <Typography className={classes.packageTitle}>
                  Customize
                </Typography>

                <Typography className={classes.optionDesc}>
                  Personally pick your own preferred services in photography or
                  videography from Real Unbox Studio. Add-on extra services to
                  complete your own requirements at a discounted price
                </Typography>
              </div>

              <ButtonBase className={classes.packageButton}>
                Order Now
              </ButtonBase>
            </Box>
          </Grid>
          <Grid item xl={4} lg={4} md={4}>
            <Box className={classes.packageContainer}>
              <div>
                <Typography className={classes.packageTitle}>
                  Package
                </Typography>
                <div className={classes.vTen} />
                <Typography className={classes.optionDesc}>
                  Pick from our selected services available in 3 main packages.
                  All design to deliver from convenience experience to first
                  class quality.
                </Typography>
              </div>

              <ButtonBase className={classes.packageButton}>
                Order Now
              </ButtonBase>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.vThir} /> */}
      <div className={classes.vFif} />
      <div className={classes.vFif} />
    </div>
  );
};

export default StudioUI;
