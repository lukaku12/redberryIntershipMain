import { configureStore } from "@reduxjs/toolkit";
import aboutYouSlice from "./aboutYouSlice";
import covidSlice from "./covidSlice";

import pageReducer from "./pageSlice";
import skillSlice from "./skillSlice";
import userDataReducer from "./userDataSlice";

const store = configureStore({
  reducer: {
    page: pageReducer,
    userData: userDataReducer,
    skillData: skillSlice,
    covidData: covidSlice,
    aboutYouData: aboutYouSlice,
  },
});

export default store;
