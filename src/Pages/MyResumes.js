import React from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/MyResumes.css";
import { Button } from "@mui/material";
import BlackScreen from "../Components/BlackScreen";
import { templates } from "../Data/templates";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box } from "@mui/system";

const MyResumes = (props) => {
  const resumes = JSON.parse(window.localStorage.getItem("resumes"));

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

  return (
    <div className="my-resumes">
      <Navbar active={"My Resumes"} />
      <Box className='my-resumes-container'
        sx={{
          width: {
            sm: "80%",
            md: "85%",
            lg: "90%",
            xl: "90%"
          },
          padding: "50px 70px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: '30px',
        }}

      >
        {resumes ? (
          resumes.map((resume, index) => {
            return <>
              <div className="resume" key={index}>
                {getTemplate(resume)}
                < BlackScreen />
                <Button
                  className="use-template-btn"
                  onClick={console.log("clicked")}
                  size="medium"
                  variant="contained">
                  Use Template
                </Button>
              </div>
            </>

          })
        )

          : (
            <div className="no-resumes-container">
              <SentimentVeryDissatisfiedIcon fontSize="large" />
              <p className="no-resumes-text">
                You do not have any Resumes yet. Make One to view it here.
              </p>
            </div>
          )}

      </Box>
    </div >
  );
};

export default MyResumes;
