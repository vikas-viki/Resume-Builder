import * as actionTypes from "./actionTypes";

const initialSelectedTemplateState = {
  selectedTemplateId: null,
};

const initialPersonalInfoState = {
  profile_img: "",
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  address: "",
  city: "",
  state_name: "",
  postal_code: "",
  objective: "",
};

export const selectedTemplateReducer = (
  state = initialSelectedTemplateState,
  action
) => {
  switch (action.type) {
    case actionTypes.SELECTTEMPLATE:
      return { ...state, selectedTemplateId: action.payload };
    default:
      return state;
  }
};

export const personalInfoReducer = (
  state = initialPersonalInfoState,
  action
) => {
  switch (action.type) {
    case actionTypes.EDITFIRSTNAME:
      return {
        ...state,
        first_name: action.payload,
      };
    case actionTypes.EDITLASTNAME:
      return {
        ...state,
        last_name: action.payload,
      };
    case actionTypes.EDITEMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case actionTypes.EDITMOBILE:
      return {
        ...state,
        mobile: action.payload,
      };
    case actionTypes.EDITADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case actionTypes.EDITCITY:
      return {
        ...state,
        city: action.payload,
      };
    case actionTypes.EDITSTATE:
      return {
        ...state,
        state_name: action.payload,
      };
    case actionTypes.EDITPOSTALCODE:
      return {
        ...state,
        postal_code: action.payload,
      };
    case actionTypes.EDITOBJECTIVE:
      return {
        ...state,
        objective: action.payload,
      };
    default:
      return state;
  }
};
