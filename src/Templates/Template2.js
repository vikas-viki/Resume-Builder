import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template2.css";
import TemplateHeader from "../Components/TemplateHeader";
import TemplateHeading from "../Components/TemplateHeading";
import { data } from "../Data/data";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";

const Template2 = (props) => {
  return (
    <Paper elevation={3}>
      <TemplateHeader
        primaryColor={props.primaryColor}
        secondaryColor={props.secondaryColor}
        bgColor={props.bgColor}
        data={data}
      />
      <Container>
        <TemplateHeading color={"#9B536F"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {data.work_experience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TemplateHeading color={"#9B536F"} title={"Education"} />
        <TemplateEducationComponent education={data.education_details} />
        <TemplateHeading color={"#9B536F"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {data.key_skills.map((skill) => {
            return <TemplateKeySkillComponent key={skill.id} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template2;
