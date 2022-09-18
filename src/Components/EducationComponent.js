import { Divider, Paper } from "@mui/material";
import React, { useState } from "react";
import "../Styles/EducationComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import { connect } from "react-redux";
import {
  editDegree,
  editEducationEndYear,
  editEducationStartYear,
  editType,
  editUniversity,
} from "../Redux/actions";
import { useForm } from "react-hook-form";

const mapStateToProps = (state) => ({
  educationInfo: state.educationDetailsReducer.educationInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onEditType: (type) => dispatch(editType(type)),
  onEditUniversity: (university) => dispatch(editUniversity(university)),
  onEditDegree: (degree) => dispatch(editDegree(degree)),
  onEditStartYear: (event) =>
    dispatch(editEducationStartYear(event.target.value)),
  onEditEndYear: (event) => dispatch(editEducationEndYear(event.target.value)),
});

const EducationComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const handleNext = (data) => {
    // console.log(data);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  // console.log(
  //   props.educationInfo.domain,
  //   props.educationInfo.university,
  //   props.educationInfo.degree,
  //   props.educationInfo.start_year,
  //   props.educationInfo.end_year
  // );

  return (
    <Paper className="education-paper" elevation={3}>
      <h2 className="education-heading">Education Details</h2>
      <Divider sx={{ margin: "10px 0px" }} />
      <form onSubmit={handleSubmit(handleNext)}>
        <div className="education-form-cont">
          <InputComponent
            title={"Domain"}
            type={"text"}
            name={"domain"}
            register={register}
            multiline={false}
            value={props.educationInfo.domain}
            setValue={props.onEditType}
            error={errors.domain ? true : false}
            errorMessage={errors.domain ? errors.domain.message : null}
          />
          <div></div>
          <InputComponent
            title={"University"}
            type={"text"}
            name={"university"}
            register={register}
            multiline={false}
            value={props.educationInfo.university}
            setValue={props.onEditUniversity}
            error={errors.university ? true : false}
            errorMessage={errors.university ? errors.university.message : null}
          />
          <InputComponent
            title={"Degree"}
            type={"text"}
            name={"degree"}
            register={register}
            multiline={false}
            value={props.educationInfo.degree}
            setValue={props.onEditDegree}
            error={errors.degree ? true : false}
            errorMessage={errors.degree ? errors.degree.message : null}
          />
          <SelectComponent
            title={"Start Year"}
            value={props.educationInfo.start_year}
            setValue={props.onEditStartYear}
          />
          <SelectComponent
            title={"End Year"}
            value={props.educationInfo.end_year}
            setValue={props.onEditEndYear}
          />
        </div>
        <Divider sx={{ margin: "10px 0px" }} />
        <BackNextBtnComponent
          onNext={handleNext}
          onBack={handleBack}
          loading={loading}
          tab={props.tab}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationComponent);
