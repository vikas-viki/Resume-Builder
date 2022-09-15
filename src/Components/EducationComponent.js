import { Divider, Paper } from "@mui/material";
import React, { useState } from "react";
import "../Styles/EducationComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";

const EducationComponent = (props) => {
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const handleNext = () => {
    console.log("here");
    props.setTab(props.tab + 1);
  };
  return (
    <Paper className="education-paper" elevation={3}>
      <h2 className="education-heading">Education Details</h2>
      <Divider sx={{ margin: "10px 0px" }} />
      <div className="education-form-cont">
        <InputComponent
          title={"Type"}
          type={"text"}
          multiline={false}
          //   value={props.experience.job_title}
          //   setValue={handleJobTitle}
          // error={props.experience.error.job_title}
        />
        <div></div>
        <InputComponent
          title={"University"}
          type={"text"}
          multiline={false}
          //   value={props.experience.organization_name}
          //   setValue={handleOrgName}
          // error={props.experience.error.organization_name}
        />
        <InputComponent
          title={"Degree"}
          type={"text"}
          multiline={false}
          //   value={props.experience.organization_name}
          //   setValue={handleOrgName}
          // error={props.experience.error.organization_name}
        />
        <SelectComponent
          title={"Start Year"}
          //   value={props.experience.start_year}
          //   setValue={handleStartYear}
        />
        <SelectComponent
          title={"End Year"}
          //   value={props.experience.end_year}
          //   setValue={handleEndYear}
        />
      </div>
      <Divider sx={{ margin: "10px 0px" }} />
      <BackNextBtnComponent
        onNext={handleNext}
        onBack={handleBack}
        loading={loading}
        tab={props.tab}
        nextTitle={"Next"}
        backTitle={"Back"}
      />
    </Paper>
  );
};

export default EducationComponent;
