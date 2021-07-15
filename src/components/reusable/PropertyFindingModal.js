import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
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
}));

export default function PropertyFindingModal(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    title,
    propertyType,
    propertySubTypes,
    onSubPropertyTypesClick,
    setPropertyContext,
    propertyContext,
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
        {t("What kind of")} {propertyType} {t("property?")}
      </Typography>
      <Typography className={classes.modalDesc}>
        {t("Please choose the")} {propertyType} {t("property you want")}
      </Typography>
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
