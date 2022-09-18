import React from "react";
import "../Styles/TemplateHeader.css";

const TemplateHeader = (props) => {
  return (
    <div style={{ backgroundColor: props.bgColor }}>
      <div className="template-header">
        <div className="template-header-first">
          <div
            style={{ backgroundColor: props.primaryColor }}
            className="template-img-cont">
            <p style={{ color: props.bgColor }} className="template-img-text">
              AM
            </p>
          </div>
          <div className="template-user-details-cont">
            <h2
              style={{ color: props.primaryColor }}
              className="template-user-name">
              {props.personalInfo.first_name +
                " " +
                props.personalInfo.last_name}
            </h2>
            <p
              style={{ color: props.secondaryColor }}
              className="template-user-designation">
              {props.workExperience[0].job_title}
            </p>
          </div>
        </div>
        <p
          style={{ color: props.primaryColor }}
          className="template-header-second">
          {props.personalInfo.address}
        </p>
      </div>
      <p
        style={{ color: props.secondaryColor }}
        className="template-user-about">
        {props.personalInfo.objective}
      </p>
    </div>
  );
};

export default TemplateHeader;
