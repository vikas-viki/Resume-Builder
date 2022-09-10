import { Paper } from "@mui/material";
import React from "react";
import "../Styles/Template1.css";
import TemplateHeader from "../Components/TemplateHeader";
import { Box, Container } from "@mui/system";
import TemplateHeading from "../Components/TemplateHeading";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import { data } from "../Data/data";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";

const Template1 = (props) => {
  return (
    <Paper id="report" elevation={3}>
      <TemplateHeader
        primaryColor={props.primaryColor}
        secondaryColor={props.secondaryColor}
        bgColor={props.bgColor}
        data={data}
      />
      <Container>
        <TemplateHeading color={"#C98A55"} title={"Professional Experience"} />
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
        <TemplateHeading color={"#C98A55"} title={"Education"} />
        <TemplateEducationComponent education={data.education_details} />
        <TemplateHeading color={"#C98A55"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {data.key_skills.map((skill) => {
            return <TemplateKeySkillComponent key={skill.id} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template1;
