import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Box, ButtonBase, IconButton, Typography } from "@material-ui/core";
import colors from "../../config/colors";
import { CloseRounded } from "@material-ui/icons";
import PropertyOwnerModalTextField from "./PropertyOwnerModalTextField";
import _ from "lodash";
import api_config from "./../../config/api_config";
import validator from "validator";
import axios from "axios";
import { useTranslation } from "react-i18next";
import CusTextField from "./CusTextField";
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
  // paper: {
  //   position: "absolute",
  //   width: "60%",
  //   backgroundColor: theme.palette.background.paper,

  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(4, 4, 4),
  //   outline: "none",
  // },
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
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  modalDesc: {
    fontSize: 16,
    color: "#7C7C7C",
  },
  modal: {
    outline: "none",
  },
}));

export default function PropertyOwnerModal(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    // title,
    children,
  } = props;
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [isErrorPhoneNumberTwo, setIsErrorPhoneNumberTwo] = useState(false);
  const onPhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
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

  const sendPhoneNumber = async () => {
    try {
      // fetch data from a url endpoint

      let params = {
        phone1: phoneNumber,
        // phone2: phoneTwo,
        description: "Request Listing",
      };

      params = _.pickBy(params, (obj) => {
        return obj !== "null";
      });

      // console.log("params", params);
      const response = await axios({
        method: "get",
        url: api_config.end_point + `/api/v1/bot/sendContactMessage`,
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
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsError(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          onClick={handleClose}
          style={{ transform: "translate(20px)" }}
        >
          <CloseRounded style={{ color: "#7C7C7C" }} />
        </IconButton>
      </Box>
      <Typography className={classes.modalTitle}>
        We will contact you as soon as possible
      </Typography>
      <Typography className={classes.modalDesc}>
        Please input your phone number
      </Typography>

      <div style={{ height: 20 }} />
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
      <Box display="flex" justifyContent="center" alignItems="center">
        <ButtonBase
          onClick={onSubmitClick}
          style={{
            backgroundColor: colors.cerise,
            color: colors.white,
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            paddingBottom: 20,
            fontSize: 16,
            fontWeight: "bold",
            borderRadius: 10,
          }}
        >
          Submit
        </ButtonBase>
      </Box>
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <ButtonBase onClick={handleOpen}>{children}</ButtonBase>
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
