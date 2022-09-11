import { Button, CircularProgress } from "@mui/material";
import React from "react";
import "../Styles/BackNextBtnComponent.css";

const BackNextBtnComponent = (props) => {
  return (
    <div className="back-next-btn-cont">
      {props.tab === 0 ? null : (
        <Button
          onClick={props.onBack}
          className="outlined-btn"
          sx={{ marginRight: "20px" }}
          variant="outlined">
          Back
        </Button>
      )}
      {props.loading ? (
        <CircularProgress size={25} />
      ) : (
        <Button
          onClick={props.onNext}
          className="contained-btn"
          variant="contained">
          Next
        </Button>
      )}
    </div>
  );
};

export default BackNextBtnComponent;
