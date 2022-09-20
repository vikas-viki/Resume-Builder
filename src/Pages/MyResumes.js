import React from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/MyResumes.css";
import { templates } from "../Data/templates";

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
        {resumes.map((resume, index) => {
          return getTemplate(resume);
        })}
      </div>
    </div>
  );
};

export default MyResumes;
