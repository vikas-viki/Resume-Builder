import { Button, Divider, Paper } from "@mui/material";
import React, { useState } from "react";
import "../Styles/WorkExperienceComponent.css";
import { connect } from "react-redux";
import EachExperienceComponent from "./EachExperienceComponent";
import BackNextBtnComponent from "./BackNextBtnComponent";
import { addAllExperience, addExperience } from "../Redux/actions";

const mapStateToProps = (state) => ({
  experiences: state.workExperienceReducer.experiences,
});

const mapDispatchToProps = (dispatch) => ({
  setExperience: (experience) => dispatch(addExperience(experience)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
});

const WorkExperienceComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const handleNext = () => {
    console.log("here");
    props.setTab(props.tab + 1);
  };

  console.log(props.experiences);

  const addNewExperience = () => {
    props.setExperience({
      id: props.experiences.length + 1,
      job_title: "",
      organization_name: "",
      start_year: "",
      end_year: "",
    });
  };

  return (
    <Paper className="work-experience-paper" elevation={3}>
      <h2 className="work-experience-heading">Work Experience</h2>
      {props.experiences.map((experience) => {
        return (
          <EachExperienceComponent
            key={experience.id}
            experience={experience}
            count={experience.id}
          />
        );
      })}
      {props.experiences.length === 2 ? null : (
        <div className="add-new-btn-cont">
          <Button onClick={addNewExperience} variant="text">
            Add New
          </Button>
        </div>
      )}
      <Divider sx={{ margin: "10px 0px" }} />
      <BackNextBtnComponent
        onNext={handleNext}
        onBack={handleBack}
        loading={loading}
        tab={props.tab}
      />
    </Paper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkExperienceComponent);
