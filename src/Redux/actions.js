import * as actionTypes from "./actionTypes";

export const selectTemplate = (id) => ({
  type: actionTypes.SELECTTEMPLATE,
  payload: id,
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
