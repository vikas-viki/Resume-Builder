import React from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/MyResumes.css";
import { templates } from "../Data/templates";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const MyResumes = (props) => {
  const resumes = JSON.parse(window.localStorage.getItem("resumes"));

  const getTemplate = (resume) => {
    let template = templates.find(
      (eachTemplate) => eachTemplate.id === resume.id
    );

    console.log(template);

    const TemplateComp = React.cloneElement(template.template, {
      personalinfo: resume.personalInfo,
      workexperience: resume.experiences,
      educationinfo: resume.educationInfo,
      skills: resume.skills,
      key: resume.id,
    });

    return TemplateComp;
  };

  return (
    <div className="my-resumes">
      <Navbar active={"My Resumes"} />
      <div className="my-resumes-container">
        {resumes ? (
          resumes.map((resume, index) => {
            return getTemplate(resume);
          })
        ) : (
          <div className="no-resumes-container">
            <SentimentVeryDissatisfiedIcon fontSize="large" />
            <p className="no-resumes-text">
              You do not have any Resumes yet. Make One to view it here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyResumes;
