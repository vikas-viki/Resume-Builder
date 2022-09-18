import { Avatar, Button, Divider, Paper } from "@mui/material";
import React, { useState } from "react";
import "../Styles/PersonalInfoComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";
import { connect } from "react-redux";
import Avatar1 from 'react-avatar-edit';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const PersonalInfoComponent = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(null);
  const [sotreImage, setSotreImage] = useState([]);


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };




  const handleNext = () => {
    if (props.personalInfo.first_name.length === 0) {
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
    } else if (props.personalInfo.last_name.length === 0) {
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
    } else if (props.personalInfo.email.length === 0) {
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
    } else if (Number(props.personalInfo.mobile) <= 0) {
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
    } else if (props.personalInfo.address.length === 0) {
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
    } else if (props.personalInfo.city.length === 0) {
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
    } else if (props.personalInfo.state_name.length === 0) {
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
    } else if (Number(props.personalInfo.postal_code) <= 0) {
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
    } else if (props.personalInfo.objective.length === 0) {
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

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  const onCrop = (view) => {
    setImg(view);

  }

  const onClose = (view) => {
    setImg(null);
  }
  const saveImage = () => {
    setSotreImage([ { img }]);
    setOpen(false);
  }
  const profileImg = sotreImage.map((ele) => ele.img)
  return (
    <Paper className="personal-info-paper" elevation={3}>
      <Avatar
        sx={{ width: 120, height: 120, marginBottom: 1 }}
        alt="profile img"
        src={profileImg.length ? profileImg : `https://img.icons8.com/color/344/test-account.png`}
      />
      {/* <Button className="change-profile-photo-btn" variant="text">
        Change Profile Photo
      </Button> */}
      <div>
        <Button className="change-profile-photo-btn" variant="outlined" onClick={handleClickOpen}>
          Change Profile Photo
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Update Image
          </BootstrapDialogTitle>
          <DialogContent >
            <Avatar1
              width={400}
              height={300}
              onCrop={onCrop}
              onClose={onClose}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus variant='contained' onClick={saveImage}>
              Save
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>

      {/* {preview && <img src={preview} alt='preview'/>} */}
      <div className="personal-info-form-fields">
        <InputComponent
          title={"First Name"}
          type={"text"}
          multiline={false}
          value={props.personalInfo.first_name}
          setValue={props.setFirstName}
          error={error ? error.first_name_error : false}
        />
        <InputComponent
          title={"Last Name"}
          type={"text"}
          multiline={false}
          value={props.personalInfo.last_name}
          setValue={props.setLastName}
          error={error ? error.last_name_error : false}
        />
        <InputComponent
          title={"Email"}
          type={"email"}
          multiline={false}
          value={props.personalInfo.email}
          setValue={props.setEmail}
          error={error ? error.email_error : false}
        />
        <InputComponent
          title={"Mobile"}
          type={"number"}
          multiline={false}
          value={props.personalInfo.mobile}
          setValue={props.setMobile}
          error={error ? error.mobile_error : false}
        />
      </div>
      <InputComponent
        title={"Address"}
        type={"text"}
        multiline={false}
        value={props.personalInfo.address}
        setValue={props.setAddress}
        error={error ? error.address_error : false}
      />
      <div style={{ marginTop: 20 }} className="personal-info-form-fields">
        <InputComponent
          title={"City"}
          type={"text"}
          multiline={false}
          value={props.personalInfo.city}
          setValue={props.setCity}
          error={error ? error.city_error : false}
        />
        <InputComponent
          title={"State"}
          type={"text"}
          multiline={false}
          value={props.personalInfo.state_name}
          setValue={props.setStateName}
          error={error ? error.state_error : false}
        />
        <InputComponent
          title={"Postal Code"}
          type={"number"}
          multiline={false}
          value={props.personalInfo.postal_code}
          setValue={props.setPostalCode}
          error={error ? error.postal_code_error : false}
        />
      </div>
      <InputComponent
        title={"Objective"}
        type={"text"}
        multiline={true}
        value={props.personalInfo.objective}
        setValue={props.setObjective}
        error={error ? error.objective_error : false}
      />
      <Divider className="personal-details-divider" />
      <BackNextBtnComponent
        onNext={handleNext}
        loading={loading}
        tab={props.tab}
        nextTitle={"Next"}
        backTitle={"Back"}
      />
    </Paper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfoComponent);
