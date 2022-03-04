import { createSlice } from "@reduxjs/toolkit";

const covidSlice = createSlice({
  name: "skillData",
  initialState: {
    preferWork: "",
    covid19: "",
    vaccinated: "",
    whenCovid19: "",
    vaccineWhen: "",
    error: "All Fields Are Required!",
    validCovidInfo: false,
  },
  reducers: {
    setCovidInfo: (state, action) => {
      switch (action.payload.name) {
        case "preferWork":
          state.preferWork = action.payload.value;
          break;
        case "covid19":
          state.covid19 = action.payload.value;
          break;
        case "vaccinated":
          state.vaccinated = action.payload.value;
          break;
        case "whenCovid19":
          state.whenCovid19 = action.payload.value;
          break;
        case "vaccineWhen":
          state.vaccineWhen = action.payload.value;
          break;
        default:
          return console.log("Error");
      }
      if (
        state.preferWork !== "" &&
        state.covid19 !== "" &&
        state.vaccinated !== ""
      ) {
        if (state.covid19 === "yes" && state.vaccinated === "yes") {
          if (state.whenCovid19 !== "" && state.vaccineWhen !== "") {
            state.validCovidInfo = true;
            state.error = "";
          } else {
            state.validCovidInfo = false;
            state.error = "All Fields Are Required!";
          }
        } else if (state.covid19 === "yes" && state.vaccinated === "no") {
          if (state.whenCovid19 !== "") {
            state.validCovidInfo = true;
            state.error = "";
          } else {
            state.validCovidInfo = false;
            state.error = "All Fields Are Required!";
          }
        } else if (state.covid19 === "no" && state.vaccinated === "yes") {
          if (state.vaccineWhen !== "") {
            state.validCovidInfo = true;
            state.error = "";
          } else {
            state.validCovidInfo = false;
            state.error = "All Fields Are Required!";
          }
        } else {
          state.validCovidInfo = true;
          state.error = "";
        }
      }
    },
  },
});

export const covidActions = covidSlice.actions;

export default covidSlice.reducer;
