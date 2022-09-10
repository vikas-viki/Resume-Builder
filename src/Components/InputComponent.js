import { TextField } from "@mui/material";
import React from "react";
import "../Styles/InputComponent.css";

const InputComponent = (props) => {
  return (
    <div className="input-component">
      <p className="input-title">{props.title}</p>
      <TextField
        variant="outlined"
        type={props.type}
        multiline={props.multiline}
        rows={5}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value.toString())}
        error={props.error}
        helperText={props.error ? "*Please fill this field" : null}
      />
    </div>
  );
};

export default InputComponent;
