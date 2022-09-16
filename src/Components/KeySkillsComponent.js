import { Paper, Typography, Divider, Button } from "@mui/material";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import "../Styles/KeySkillsComponent.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BackNextBtnComponent from "./BackNextBtnComponent";
import { connect } from "react-redux";
import { addNewSkills, deleteSkill, editSkill } from "../Redux/actions";

const mapStateToProps = (state) => ({
  skills: state.keySkillsReducer.skills,
});

const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(addNewSkills()),
  onEditSkill: (skill, index) => dispatch(editSkill({ skill, index })),
  onDeleteSkill: (index) => dispatch(deleteSkill(index)),
});

function KeySkillsComponent(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePreview = () => {
    props.setTab(props.tab + 1);
  };

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Key Skills</h2>
      <Divider />
      <div className="key-skills-form-fields">
        {props.skills.map((skill, index) => {
          return (
            <div key={index} className="key-input-with-delete">
              <InputComponent
                type="text"
                multiline={false}
                value={skill}
                setValue={(skill) => props.onEditSkill(skill, index)}
                error={error ? error.first_name_error : false}
              />
              {props.skills.length === 1 ? null : (
                <DeleteOutlineOutlinedIcon
                  sx={{ marginLeft: "10px" }}
                  onClick={() => props.onDeleteSkill(index)}
                />
              )}
            </div>
          );
        })}
      </div>
      {props.skills.length >= 6 ? null : (
        <Button
          className="add-new-btn"
          variant="text"
          onClick={props.onAddNewSkill}>
          Add new
        </Button>
      )}
      <Divider className="key-skills-divider" />
      <BackNextBtnComponent
        onNext={handlePreview}
        loading={loading}
        tab={props.tab}
        onBack={handleBack}
        nextTitle={"Preview"}
        backTitle={"Back"}
      />
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(KeySkillsComponent);
