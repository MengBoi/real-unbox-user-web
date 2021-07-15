import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import validator from "validator";
import {
  Box,
  ButtonBase,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import colors from "../../config/colors";
import { CloseRounded } from "@material-ui/icons";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import CusTextField from "./CusTextField";
import api_config from "./../../config/api_config";
import axios from "axios";
function getModalStyle() {
  const top = 40;
  const left = 45;

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
      width: 200,
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
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
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
  submitBtn: {
    display: "flex",
    width: "60%",
    height: 50,
    backgroundColor: colors.cerise,
    borderRadius: 5,
    color: "white",
    marginTop: 20,
    fontSize: 14,
    fontWeight: "bold",
  },
}));

export default function BookVisit(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    title,
    // propertyType,
    propertySubTypes,
    onSubPropertyTypesClick,
    setPropertyContext,
    propertyContext,
    projectName,
    projectType,
  } = props;
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsError(false);
  };
  const validatePhoneNumber = (number) => {
    if (number.length == 9 || number.length == 10) {
      const isValidPhoneNumber = validator.isMobilePhone(number);
      if (isValidPhoneNumber) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const onSubmitClick = () => {
    if (validatePhoneNumber(phoneNumber)) {
      sendPhoneNumber();
      handleClose();
      setIsError(false);
      setPhoneNumber("");
    } else {
      setIsError(true);
    }
  };
  const onPhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const sendPhoneNumber = async () => {
    try {
      // fetch data from a url endpoint

      let params = {
        name: projectName,
        phone: phoneNumber,
        type: projectType,
        description: "Book a Visit",
      };

      params = _.pickBy(params, (obj) => {
        return obj !== "null";
      });

      // console.log("params", params);
      const response = await axios({
        method: "get",
        url: api_config.end_point + `/api/v1/bot/sendMessage`,
        params: params,
        config: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      });
      console.warn("sendPhone", response);
    } catch (error) {
      // setError(error); // catches both errors
    }
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
        {t("Please input your phone number")}.
      </Typography>
      <Typography className={classes.modalDesc}>
        {t("We will contact you as soon as possible")}
      </Typography>
      <div style={{ height: 30 }} />
      <CusTextField
        onChange={onPhoneNumberChange}
        label={t("Phone Number")}
        variant="filled"
        style={{ width: "100%" }}
      />
      <div style={{ height: 5 }} />
      {isError && (
        <Typography style={{ color: "red", fontSize: 14 }}>
          Invalid Phone Number
        </Typography>
      )}
      <div style={{ height: 20 }} />
      <Box
        display="flex"
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ButtonBase className={classes.submitBtn} onClick={onSubmitClick}>
          Submit
        </ButtonBase>
      </Box>

      <div style={{ height: 20 }} />
      <Grid container spacing={2}>
        {_.map(propertySubTypes, (type) => {
          return (
            <Grid item md={4} lg={4} xl={4} sm={4} xs={6}>
              {/* <ButtonBase style={{ backgroundColor: colors.cerise }}> */}

              <ButtonBase
                onClick={() => {
                  onSubPropertyTypesClick(type.value);
                  setPropertyContext({
                    ...propertyContext,
                    selectedSubPropertyType: type.value,
                  });
                }}
                className={classes.subPropertyTypeText}
              >
                {t(type.label)}
              </ButtonBase>

              {/* </ButtonBase> */}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <ButtonBase onClick={handleOpen} className={classes.propertyTypesBtn}>
        {title}
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
