import { Divider } from "@mui/material";
import React, { useState } from "react";
import "../Styles/EachExperienceComponent.css";
import InputComponent from "./InputComponent";
import { connect } from "react-redux";
import {
  editEndYear,
  editJobTitle,
  editOrgName,
  editStartYear,
} from "../Redux/actions";
import SelectComponent from "./SelectComponent";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setJobTitle: (title, id) =>
    dispatch(editJobTitle({ job_title: title, id: id })),
  setOrgName: (name, id) =>
    dispatch(editOrgName({ organization_name: name, id: id })),
  setStartYear: (year, id) =>
    dispatch(editStartYear({ start_year: year, id: id })),
  setEndYear: (year, id) => dispatch(editEndYear({ end_year: year, id: id })),
});

const EachExperienceComponent = (props) => {
  const handleJobTitle = (title) => {
    props.setJobTitle(title, props.count);
  };

  const handleOrgName = (name) => {
    props.setOrgName(name, props.count);
  };

  const handleStartYear = (e) => {
    props.setStartYear(e.target.value.toString(), props.count);
  };

  const handleEndYear = (e) => {
    props.setEndYear(e.target.value.toString(), props.count);
  };

  return (
    <div className="experience-cont">
      <h3 className="experience-heading">Experience {props.count}</h3>
      <Divider sx={{ margin: "5px 0px" }} />
      <div className="experience-form-cont">
        <InputComponent
          title={"Job Title"}
          type={"text"}
          multiline={false}
          value={props.experience.job_title}
          setValue={handleJobTitle}
          // error={props.experience.error.job_title}
        />
        <InputComponent
          title={"Organization Name"}
          type={"text"}
          multiline={false}
          value={props.experience.organization_name}
          setValue={handleOrgName}
          // error={props.experience.error.organization_name}
        />
        <SelectComponent
          title={"Start Year"}
          value={props.experience.start_year}
          setValue={handleStartYear}
        />
        <SelectComponent
          title={"End Year"}
          value={props.experience.end_year}
          setValue={handleEndYear}
        />
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EachExperienceComponent);
