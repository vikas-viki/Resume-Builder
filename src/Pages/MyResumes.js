import React from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/MyResumes.css";
import { Button } from "@mui/material";
import BlackScreen from "../Components/BlackScreen";
import { templates } from "../Data/templates";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box } from "@mui/system";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import JsPDF from "jspdf";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MyResumes = (props) => {
  const resumes = JSON.parse(window.localStorage.getItem("resumes"));

  const getTemplate = (resume) => {
    let template = templates.find(
      (eachTemplate) => eachTemplate.id === resume.template_id
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

  const deleteResume = (resume) => {

    let resumes = window.localStorage.getItem("resumes");
    console.log(resumes)

    let newResumes = JSON.parse(resumes);
    const newSetOfResumes = newResumes.filter((el) => {
      return el.id !== resume.id
    })

    window.localStorage.setItem("resumes", JSON.stringify(newSetOfResumes));

  }
  const downloadResume = (id) => {
    console.log(id)
    const report = new JsPDF("p", "pt", "a4")
    report.html(document.getElementById(`${id}`)).then(() => {
      report.save(`resume.pdf`)
      // // console.log(resumes)
    })
  }
  return (
    <>
      <Navbar active={"My Resumes"} />
      <div className="my-resumes">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container
            justifyContent="center"
            alignItems="center"
            className="grid"
          >
            {resumes.length >=1 ? (
              resumes.map((resume, index) => {
                return <Grid item className={`resume `} id={`${index}resume`} margin={2} key={index}>
                  <Item>{getTemplate(resume)}
                    < BlackScreen />
                    <div>

                      <Button
                        sx={{
                          position: "relative",
                          top: "-35vh",
                          left: "0px",
                          transform: "inherit"
                        }}
                        className="use-template-btn"
                        onClick={() => { downloadResume(index + "resume") }}
                        size="medium"
                        variant="contained">
                        Download
                      </Button>
                      <Button
                        className="use-template-btn"
                        onClick={() => { deleteResume(resume) }}
                        size="medium"
                        variant="contained">
                        Delete
                      </Button>
                    </div>
                  </Item>
                </Grid>


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

          </Grid>
        </Box>
      </div >
    </>
  );
};

export default MyResumes;
