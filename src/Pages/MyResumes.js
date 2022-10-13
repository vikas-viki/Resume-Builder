import React from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/MyResumes.css";
import { Button } from "@mui/material";
import BlackScreen from "../Components/BlackScreen";
import { templates } from "../Data/templates";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box } from "@mui/system";
import { connect } from "react-redux";
import {
  addAllExperience,
  addEducation,
  addPersonalInfo,
  editSkill,
  selectTemplate,
} from "../Redux/actions";
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
  onAddEducation: (details) => dispatch(addEducation(details)),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
});

const MyResumes = (props) => {
  const resumes = JSON.parse(window.localStorage.getItem("resumes"));
  const navigate = useNavigate();

  const getTemplate = (resume) => {
    let template = templates.find(
      (eachTemplate) => eachTemplate.id === resume.id
    );

    // console.log(template);

    const TemplateComp = React.cloneElement(template.template, {
      personalinfo: resume.personalInfo,
      workexperience: resume.experiences,
      educationinfo: resume.educationInfo,
      skills: resume.skills,
      key: resume.id,
    });

    return TemplateComp;
  };

  const setUserData = (resume) => {
    console.log(resume);
    //set personal info

    props.onAddPersonalInfo(resume.personalInfo);

    //set work experience

    props.setAllExperience(resume.experiences);

    //set education info

    props.onAddEducation(resume.educationInfo);

    //set skills

    props.onEditSkill(resume.skills);
  };

  const navigateToFillDetails = (resume) => {
    props.setSelectedTemplateId(resume.id);
    setUserData(resume);
    navigate("/template/fill-details");
  };

  // console.log(resumes);

  return (
    <div className="my-resumes">
      <Navbar active={"My Resumes"} />
      <Box
        className="my-resumes-container"
        sx={{
          width: {
            sm: "80%",
            md: "85%",
            lg: "100%",
            xl: "100%",
          },
          padding: "50px 70px",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: "30px",
        }}>
        {resumes ? (
          resumes.map((resume, index) => {
            return (
              <div className="resume" key={index}>
                {getTemplate(resume)}
                <BlackScreen />
                <Button
                  className="use-template-btn"
                  onClick={() => navigateToFillDetails(resume)}
                  size="medium"
                  variant="contained">
                  Edit Template
                </Button>
              </div>
            );
          })
        ) : (
          <div className="no-resumes-container">
            <SentimentVeryDissatisfiedIcon fontSize="large" />
            <p className="no-resumes-text">
              You do not have any Resumes yet. Make One to view it here.
            </p>
          </div>
        )}
      </Box>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyResumes);
