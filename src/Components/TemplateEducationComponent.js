import React from "react";
import "../Styles/TemplateEducationComponent.css";

const TemplateEducationCompnent = (props) => {
  return (
    <h3 className="template-education-details">
      {props.education.degree} in {props.education.type}{" "}
      <span className="template-education-university">
        {props.education.university}
      </span>
      <span className="education-start-end">
        ({props.education.start_year} - {props.education.end_year})
      </span>
    </h3>
  );
};

export default TemplateEducationCompnent;
