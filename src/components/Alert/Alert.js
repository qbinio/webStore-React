import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import AppContext from "../../context/context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = () => {
  const context = useContext(AppContext);
  const { handleAlertClose, alertOpen, alertContent } = context;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={alertOpen}>
        <MaterialAlert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleAlertClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {alertContent}
        </MaterialAlert>
      </Collapse>
    </div>
  );
};

export default Alert;
