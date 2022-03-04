import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  validationErrors: {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    telError: "",
  },
  validationData: {
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
  },
  validUser: false,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setValidationData: (state, action) => {
      switch (action.payload.name) {
        case "firstName":
          state.validationData.firstName = action.payload.data;
          break;
        case "lastName":
          state.validationData.lastName = action.payload.data;
          break;
        case "email":
          state.validationData.email = action.payload.data;
          break;
        case "tel":
          state.validationData.tel = action.payload.data;
          break;

        default:
          return console.log("Error");
      }
    },

    setValidationErrors: (state, action) => {
      state.validationErrors.firstNameError = action.payload.firstNameError;
      state.validationErrors.lastNameError = action.payload.lastNameError;
      state.validationErrors.emailError = action.payload.emailError;
      state.validationErrors.telError = action.payload.telError;
    },
    setIsValidUser: (state, action) => {
      state.validUser = action.payload;
    },
  },
});

export const { setIsValidUser, setValidationData, setValidationErrors } =
  userDataSlice.actions;

export const getIsUserValid = (state) => state.userData.validUser;
export const getValidationData = (state) => state.userData.validationData;
export const getUserInformation = (state) => state.userData.userInformation;
export const getValidationErrors = (state) => state.userData.validationErrors;

export default userDataSlice.reducer;
