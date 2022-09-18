import * as actionTypes from "./actionTypes";

export const selectTemplate = (id) => ({
  type: actionTypes.SELECTTEMPLATE,
  payload: id,
});

export const setProfileImage = (image) => ({
  type: actionTypes.SETPROFILEIMAGE,
  payload: image,
});

export const editFirstName = (first_name) => ({
  type: actionTypes.EDITFIRSTNAME,
  payload: first_name,
});

export const editLastName = (last_name) => ({
  type: actionTypes.EDITLASTNAME,
  payload: last_name,
});

export const editEmail = (email) => ({
  type: actionTypes.EDITEMAIL,
  payload: email,
});

export const editMobile = (mobile) => ({
  type: actionTypes.EDITMOBILE,
  payload: mobile,
});

export const editAddress = (address) => ({
  type: actionTypes.EDITADDRESS,
  payload: address,
});

export const editCity = (city) => ({
  type: actionTypes.EDITCITY,
  payload: city,
});

export const editState = (state) => ({
  type: actionTypes.EDITSTATE,
  payload: state,
});

export const editPostalCode = (postal_code) => ({
  type: actionTypes.EDITPOSTALCODE,
  payload: postal_code,
});

export const editObjective = (objective) => ({
  type: actionTypes.EDITOBJECTIVE,
  payload: objective,
});

export const addExperience = (experience) => ({
  type: actionTypes.ADDEXPERIENCE,
  payload: experience,
});

export const addAllExperience = (experience) => ({
  type: actionTypes.ADDALLEXPERIENCE,
  payload: experience,
});

export const editJobTitle = (details) => ({
  type: actionTypes.EDITJOBTITLE,
  payload: details,
});

export const editOrgName = (details) => ({
  type: actionTypes.EDITORGNAME,
  payload: details,
});

export const editStartYear = (details) => ({
  type: actionTypes.EDITSTARTYEAR,
  payload: details,
});

export const editEndYear = (details) => ({
  type: actionTypes.EDITENDYEAR,
  payload: details,
});

export const addNewSkills = () => ({
  type: actionTypes.ADDNEWSKILLS,
  payload: null,
});

export const editSkill = (details) => ({
  type: actionTypes.EDITSKILL,
  payload: details,
});

export const deleteSkill = (id) => ({
  type: actionTypes.DELETESKILL,
  payload: id,
});

export const editType = (type) => ({
  type: actionTypes.EDITTYPE,
  payload: type,
});

export const editUniversity = (university) => ({
  type: actionTypes.EDITUNIVERSITY,
  payload: university,
});

export const editDegree = (degree) => ({
  type: actionTypes.EDITDEGREE,
  payload: degree,
});

export const editEducationStartYear = (year) => ({
  type: actionTypes.EDITEDUCATIONSTARTYEAR,
  payload: year,
});

export const editEducationEndYear = (year) => ({
  type: actionTypes.EDITEDUCATIONENDYEAR,
  payload: year,
});
