import { Avatar, Button, Divider, Grid, Paper, TextField } from "@mui/material";
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

const mapStateToProps = (state) => ({
  profile_img: state.personalInfoReducer.profile_img,
  first_name: state.personalInfoReducer.first_name,
  last_name: state.personalInfoReducer.last_name,
  email: state.personalInfoReducer.email,
  mobile: state.personalInfoReducer.mobile,
  address: state.personalInfoReducer.address,
  city: state.personalInfoReducer.city,
  state_name: state.personalInfoReducer.state_name,
  postal_code: state.personalInfoReducer.postal_code,
  objective: state.personalInfoReducer.objective,
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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (props.first_name.length === 0) {
      setError((prevError) => ({
        ...prevError,
        first_name_error: true,
        last_name_error: false,
        email_error: false,
        mobile_error: false,
        address_error: false,
        city_error: false,
        state_error: false,
        postal_code_error: false,
        objective_error: false,
      }));
    } else if (props.last_name.length === 0) {
      setError((prevError) => ({
        ...prevError,
        first_name_error: false,
        last_name_error: true,
        email_error: false,
        mobile_error: false,
        address_error: false,
        city_error: false,
        state_error: false,
        postal_code_error: false,
        objective_error: false,
      }));
    } else if (props.email.length === 0) {
      setError((prevError) => ({
        ...prevError,
        first_name_error: false,
        last_name_error: false,
        email_error: true,
        mobile_error: false,
        address_error: false,
        city_error: false,
        state_error: false,
        postal_code_error: false,
        objective_error: false,
      }));
    } else if (Number(props.mobile) <= 0) {
      setError((prevError) => ({
        ...prevError,
        first_name_error: false,
        last_name_error: false,
        email_error: false,
        mobile_error: true,
        address_error: false,
        city_error: false,
        state_error: false,
        postal_code_error: false,
        objective_error: false,
      }));
    } else if (props.address.length === 0) {
      setError((prevError) => ({
        ...prevError,
        first_name_error: false,
        last_name_error: false,
        email_error: false,
        mobile_error: false,
        address_error: true,
        city_error: false,
        state_error: false,
        postal_code_error: false,
        objective_error: false,
      }));
    } else if (props.city.length === 0) {
      setError((prevError) => ({
        ...prevError,
        first_name_error: false,
        last_name_error: false,
        email_error: false,
        mobile_error: false,
        address_error: false,
        city_error: true,
        state_error: false,
        postal_code_error: false,
        objective_error: false,
      }));
    } else if (props.state_name.length === 0) {
      setError((prevError) => ({
        ...prevError,
        first_name_error: false,
        last_name_error: false,
        email_error: false,
        mobile_error: false,
        address_error: false,
        city_error: false,
        state_error: true,
        postal_code_error: false,
        objective_error: false,
      }));
    } else if (Number(props.postal_code) <= 0) {
      setError((prevError) => ({
        ...prevError,
        first_name_error: false,
        last_name_error: false,
        email_error: false,
        mobile_error: false,
        address_error: false,
        city_error: false,
        state_error: false,
        postal_code_error: true,
        objective_error: false,
      }));
    } else if (props.objective.length === 0) {
      setError((prevError) => ({
        ...prevError,
        first_name_error: false,
        last_name_error: false,
        email_error: false,
        mobile_error: false,
        address_error: false,
        city_error: false,
        state_error: false,
        postal_code_error: false,
        objective_error: true,
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        first_name_error: false,
        last_name_error: false,
        email_error: false,
        mobile_error: false,
        address_error: false,
        city_error: false,
        state_error: false,
        postal_code_error: false,
        objective_error: false,
      }));

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        props.setTab(props.tab + 1);
      }, 1000);
    }
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
      <div className="personal-info-form-fields">
        <InputComponent
          title={"First Name"}
          type={"text"}
          multiline={false}
          value={props.first_name}
          setValue={props.setFirstName}
          error={error ? error.first_name_error : false}
        />
        <InputComponent
          title={"Last Name"}
          type={"text"}
          multiline={false}
          value={props.last_name}
          setValue={props.setLastName}
          error={error ? error.last_name_error : false}
        />
        <InputComponent
          title={"Email"}
          type={"email"}
          multiline={false}
          value={props.email}
          setValue={props.setEmail}
          error={error ? error.email_error : false}
        />
        <InputComponent
          title={"Mobile"}
          type={"number"}
          multiline={false}
          value={props.mobile}
          setValue={props.setMobile}
          error={error ? error.mobile_error : false}
        />
      </div>
      <InputComponent
        title={"Address"}
        type={"text"}
        multiline={false}
        value={props.address}
        setValue={props.setAddress}
        error={error ? error.address_error : false}
      />
      <div style={{ marginTop: 20 }} className="personal-info-form-fields">
        <InputComponent
          title={"City"}
          type={"text"}
          multiline={false}
          value={props.city}
          setValue={props.setCity}
          error={error ? error.city_error : false}
        />
        <InputComponent
          title={"State"}
          type={"text"}
          multiline={false}
          value={props.state_name}
          setValue={props.setStateName}
          error={error ? error.state_error : false}
        />
        <InputComponent
          title={"Postal Code"}
          type={"number"}
          multiline={false}
          value={props.postal_code}
          setValue={props.setPostalCode}
          error={error ? error.postal_code_error : false}
        />
      </div>
      <InputComponent
        title={"Objective"}
        type={"text"}
        multiline={true}
        value={props.objective}
        setValue={props.setObjective}
        error={error ? error.objective_error : false}
      />
      <Divider className="personal-details-divider" />
      <BackNextBtnComponent
        onNext={handleNext}
        loading={loading}
        tab={props.tab}
      />
    </Paper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfoComponent);
