import { Divider, Paper } from "@mui/material";
import React, { useState } from "react";
import "../Styles/EducationComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import { connect } from "react-redux";
import {
  editDegree,
  editEducationEndYear,
  editEducationStartYear,
  editType,
  editUniversity,
} from "../Redux/actions";

const mapStateToProps = (state) => ({
  educationInfo: state.educationDetailsReducer.educationInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onEditType: (type) => dispatch(editType(type)),
  onEditUniversity: (university) => dispatch(editUniversity(university)),
  onEditDegree: (degree) => dispatch(editDegree(degree)),
  onEditStartYear: (event) =>
    dispatch(editEducationStartYear(event.target.value)),
  onEditEndYear: (event) => dispatch(editEducationEndYear(event.target.value)),
});

const EducationComponent = (props) => {
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const handleNext = () => {
    console.log("here");
    props.setTab(props.tab + 1);
  };

  console.log(
    props.educationInfo.domain,
    props.educationInfo.university,
    props.educationInfo.degree,
    props.educationInfo.start_year,
    props.educationInfo.end_year
  );

  return (
    <Paper className="education-paper" elevation={3}>
      <h2 className="education-heading">Education Details</h2>
      <Divider sx={{ margin: "10px 0px" }} />
      <div className="education-form-cont">
        <InputComponent
          title={"Domain"}
          type={"text"}
          multiline={false}
          value={props.educationInfo.domain}
          setValue={props.onEditType}
          // error={props.experience.error.job_title}
        />
        <div></div>
        <InputComponent
          title={"University"}
          type={"text"}
          multiline={false}
          value={props.educationInfo.university}
          setValue={props.onEditUniversity}
          // error={props.experience.error.organization_name}
        />
        <InputComponent
          title={"Degree"}
          type={"text"}
          multiline={false}
          value={props.educationInfo.degree}
          setValue={props.onEditDegree}
          // error={props.experience.error.organization_name}
        />
        <SelectComponent
          title={"Start Year"}
          value={props.educationInfo.start_year}
          setValue={props.onEditStartYear}
        />
        <SelectComponent
          title={"End Year"}
          value={props.educationInfo.end_year}
          setValue={props.onEditEndYear}
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

export default connect(mapStateToProps, mapDispatchToProps)(EducationComponent);
