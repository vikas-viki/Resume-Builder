import { Avatar, Button, Divider, Paper } from "@mui/material";
import React, { useState } from "react";
import "../Styles/PersonalInfoComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";
import { connect } from "react-redux";
import {
  editAddress,
  editCity,
  editEmail,
  editFirstName,
  editLastName,
  editMobile,
  editObjective,
  editPostalCode,
  editState,
} from "../Redux/actions";
import { useForm } from "react-hook-form";

const mapStateToProps = (state) => ({
  personalInfo: state.personalInfoReducer.personalInfo,
});

const mapDispatchToProps = (dispatch) => ({
  setFirstName: (first_name) => dispatch(editFirstName(first_name)),
  setLastName: (last_name) => dispatch(editLastName(last_name)),
  setEmail: (email) => dispatch(editEmail(email)),
  setMobile: (mobile) => dispatch(editMobile(mobile)),
  setAddress: (address) => dispatch(editAddress(address)),
  setCity: (city) => dispatch(editCity(city)),
  setStateName: (state) => dispatch(editState(state)),
  setPostalCode: (postal_code) => dispatch(editPostalCode(postal_code)),
  setObjective: (objective) => dispatch(editObjective(objective)),
});

const PersonalInfoComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleNext = (data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  return (
    <Paper className="personal-info-paper" elevation={3}>
      <Avatar
        sx={{ width: 120, height: 120, marginBottom: 1 }}
        alt="profile img"
        src="https://img.icons8.com/color/344/test-account.png"
      />
      <Button className="change-profile-photo-btn" variant="text">
        Change Profile Photo
      </Button>
      <form onSubmit={handleSubmit(handleNext)}>
        <div className="personal-info-form-fields">
          <InputComponent
            title={"First Name"}
            type={"text"}
            name={"firstName"}
            register={register}
            multiline={false}
            value={props.personalInfo.first_name}
            setValue={props.setFirstName}
            error={errors.firstName ? true : false}
            errorMessage={errors.firstName ? errors.firstName.message : null}
          />
          <InputComponent
            title={"Last Name"}
            type={"text"}
            name={"lastName"}
            register={register}
            multiline={false}
            value={props.personalInfo.last_name}
            setValue={props.setLastName}
            error={errors.lastName ? true : false}
            errorMessage={errors.lastName ? errors.lastName.message : null}
          />
          <InputComponent
            title={"Email"}
            type={"email"}
            name={"email"}
            register={register}
            multiline={false}
            value={props.personalInfo.email}
            setValue={props.setEmail}
            error={errors.email ? true : false}
            errorMessage={errors.email ? errors.email.message : null}
          />
          <InputComponent
            title={"Mobile"}
            type={"number"}
            name={"mobile"}
            register={register}
            multiline={false}
            value={props.personalInfo.mobile}
            setValue={props.setMobile}
            error={errors.mobile ? true : false}
            errorMessage={errors.mobile ? errors.mobile.message : null}
          />
        </div>
        <InputComponent
          title={"Address"}
          type={"text"}
          name={"address"}
          register={register}
          multiline={false}
          value={props.personalInfo.address}
          setValue={props.setAddress}
          error={errors.address ? true : false}
          errorMessage={errors.address ? errors.address.message : null}
        />
        <div style={{ marginTop: 20 }} className="personal-info-form-fields">
          <InputComponent
            title={"City"}
            type={"text"}
            name={"city"}
            register={register}
            multiline={false}
            value={props.personalInfo.city}
            setValue={props.setCity}
            error={errors.city ? true : false}
            errorMessage={errors.city ? errors.city.message : null}
          />
          <InputComponent
            title={"State"}
            type={"text"}
            name={"state"}
            register={register}
            multiline={false}
            value={props.personalInfo.state_name}
            setValue={props.setStateName}
            error={errors.state ? true : false}
            errorMessage={errors.state ? errors.state.message : null}
          />
          <InputComponent
            title={"Postal Code"}
            type={"number"}
            name={"postalCode"}
            register={register}
            multiline={false}
            value={props.personalInfo.postal_code}
            setValue={props.setPostalCode}
            error={errors.postalCode ? true : false}
            errorMessage={errors.postalCode ? errors.postalCode.message : null}
          />
        </div>
        <InputComponent
          title={"Objective"}
          type={"text"}
          name={"objective"}
          register={register}
          multiline={true}
          value={props.personalInfo.objective}
          setValue={props.setObjective}
          error={errors.objective ? true : false}
          errorMessage={errors.objective ? errors.objective.message : null}
        />
        <Divider className="personal-details-divider" />
        <BackNextBtnComponent
          // onNext={() => handleSubmit(handleNext)}
          loading={loading}
          tab={props.tab}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfoComponent);
