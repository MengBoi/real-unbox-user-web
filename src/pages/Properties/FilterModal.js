import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { FilterList } from "@material-ui/icons";

import {
  Box,
  ButtonBase,
  Hidden,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import colors from "../../config/colors";
import { CloseRounded } from "@material-ui/icons";
import DealTypesRadio from "./DealTypesRadio";

import DropDown from "../../components/reusable/DropDown";
import SortByRadio from "./SortByRadio";
import { Grid } from "@material-ui/core";

function getModalStyle() {
  const top = 40;
  const left = 40;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
    outline: "none",
    [theme.breakpoints.only("sm")]: {
      width: 400,
    },
    [theme.breakpoints.only("xs")]: {
      width: 300,
    },
  },
  propertyTypesBtn: {
    width: "100%",
    height: 60,
    backgroundColor: colors.transCerise,
    borderRadius: 10,
    color: colors.white,
    fontSize: 20,
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 16,
    },
  },
  modalTitle: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    [theme.breakpoints.only("xs")]: {
      fontSize: 14,
    },
  },
  modalDesc: {
    fontSize: 16,
    color: "#7C7C7C",
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
  },
  modal: {
    outline: "none",
  },
  subPropertyTypeText: {
    width: "100%",
    backgroundColor: colors.cerise,
    height: 50,
    borderRadius: 5,
    color: colors.white,
    fontWeight: "bold",
    fontSize: 14,
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
  },
}));

export default function FilterModal(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    minimumPrice,
    maximumPrice,
    numberOfBedroom,
    numberOfBathroom,
    subPropertyTypes,
    locations,
    handleDealTypeChange,
    selectedDealType,
    handleMinimumPriceChange,
    handleMaximumPriceChange,
    subPropertyType,
    handleBedroomChange,
    handleBathroomChange,
    propertyContext,
    handleLocationChange,
    handleSubPropertyTypeChange,
    sortByValue,
    onSortByChange,
  } = props;
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end">
        <IconButton style={{ transform: "translate(20px)" }}>
          <CloseRounded
            onClick={() => {
              handleClose();
            }}
            style={{ color: "#7C7C7C" }}
          />
        </IconButton>
      </Box>
      <Typography className={classes.modalTitle}>
        {t("Filter Options")}
      </Typography>
      <DealTypesRadio
        handleDealTypeChange={handleDealTypeChange}
        selectedValue={selectedDealType}
      />
      <div style={{ height: 10 }} />
      {/* <Hidden smUp> */}
      <Grid container spacing={1}>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <DropDown
            label={t("Minimum Price")}
            // minWidth={170}
            options={minimumPrice}
            handleChange={handleMinimumPriceChange}
          />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <DropDown
            label={t("Maximum Price")}
            // minWidth={170}
            options={maximumPrice}
            handleChange={handleMaximumPriceChange}
          />
        </Grid>

        {subPropertyType !== "building" && (
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <DropDown
              label={t("Bedroom")}
              // minWidth={80}
              options={numberOfBedroom}
              handleChange={handleBedroomChange}
            />
          </Grid>
        )}

        {subPropertyType !== "building" && (
          <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
            <DropDown
              label={t("Bathroom")}
              options={numberOfBathroom}
              // minWidth={80}
              handleChange={handleBathroomChange}
            />
          </Grid>
        )}

        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <DropDown
            label={t("Location")}
            // minWidth={200}
            options={locations}
            selectedValue={propertyContext.selectedLocation}
            handleChange={handleLocationChange}
          />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <DropDown
            label={t("Property Type")}
            // minWidth={150}
            options={subPropertyTypes}
            selectedValue={propertyContext.selectedSubPropertyType}
            handleChange={handleSubPropertyTypeChange}
          />
        </Grid>
      </Grid>
      {/* <Box
          display="flex"
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          
       
        </Box>
        <Box
          display="flex"
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
        
        </Box>
        <Box
          display="flex"
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
       

       
        </Box> */}
      {/* </Hidden> */}
      {/* <Hidden xsDown mdUp>
        <Box
          display="flex"
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <DropDown
            label="Minimum Price"
            minWidth={180}
            options={minimumPrice}
          />
          <DropDown
            label="Maximum Price"
            minWidth={180}
            options={maximumPrice}
          />
        </Box>
        <Box
          display="flex"
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <DropDown label="Bedroom" minWidth={180} options={numberOfBedroom} />
          <DropDown
            label="Property Type"
            minWidth={180}
            options={subPropertyTypes}
          />
        </Box>
        <Box
          display="flex"
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <DropDown
            label="Bathroom"
            minWidth={180}
            options={numberOfBathroom}
          />

          <DropDown label="Location" minWidth={180} options={locations} />
        </Box>
      </Hidden> */}
      <Typography>{t("Sort by")}</Typography>
      <SortByRadio sortByValue={sortByValue} onSortByChange={onSortByChange} />
    </div>
  );

  return (
    <div>
      <ButtonBase
        onClick={handleOpen}
        style={{
          display: "flex",
          backgroundColor: colors.cerise,
          color: "white",
          width: "100%",
          height: 40,
          fontSize: 14,
        }}
      >
        <FilterList />
        {t("Filter")}
      </ButtonBase>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
