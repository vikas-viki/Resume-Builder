import { Container, Grid } from "@mui/material";
import React from "react";
import "../Styles/PreviewComponent.css";
import { connect } from "react-redux";
import { templates } from "../Data/templates";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
  personalInfo: state.personalInfoReducer.personalInfo,
  experiences: state.workExperienceReducer.experiences,
  educationInfo: state.educationDetailsReducer.educationInfo,
  skills: state.keySkillsReducer.skills,
});

const mapDispatchToProps = (dispatch) => ({});

const PreviewComponent = (props) => {
  const getTemplate = (template) => {
    if (template.id === props.selectedTemplateId) {
      const TemplateComp = React.cloneElement(template.template, {
        personalinfo: props.personalInfo,
        workexperience: props.experiences,
        educationinfo: props.educationInfo,
        skills: props.skills,
      });
      return TemplateComp;
    }
  };

  console.log(props.initialPersonalInfoState);

  return (
    <Container sx={{ padding: "60px 80px" }} className="preview-container">
      <h2 className="preview-header-title">Resume Preview</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6}>
          {templates.map((template) => {
            return getTemplate(template);
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewComponent);
