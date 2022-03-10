import { createSlice } from "@reduxjs/toolkit";

const aboutYouSlice = createSlice({
  name: "aboutYouData",
  initialState: {
    attend: "",
    AboutDevTalk: "",
    tellUs: "",
    error: "All Fields Are Required!",
    validCovidInfo: false,
  },
  reducers: {
    setAboutYouInfo: (state, action) => {
      switch (action.payload.name) {
        case "attend":
          state.attend = action.payload.value;
          break;
        case "AboutDevTalk":
          state.AboutDevTalk = action.payload.value;
          break;
        case "tellUs":
          state.tellUs = action.payload.value;
          break;
        default:
          return console.log("Error");
      }
      if (state.attend !== "" && state.tellUs !== "") {
        state.validCovidInfo = true;
        state.error = "";
        if (state.attend === "yes") {
          state.error = "All Fields Are Required!";
          state.validCovidInfo = false;
          if (state.AboutDevTalk !== "") {
            state.error = "";
            state.validCovidInfo = true;
          }
        }
      } else {
        state.validCovidInfo = false;
        state.error = "All Fields Are Required!";
      }
    },
  },
});

export const AboutYouActions = aboutYouSlice.actions;

export default aboutYouSlice.reducer;
