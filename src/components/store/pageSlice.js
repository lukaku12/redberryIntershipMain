import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: 0,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    renderNextPage: (state) => {
      state.activePage += 1;
    },
    renderPrevPage: (state) => {
      state.activePage -= 1;
    },
    renderFirstPage: (state) => {
      state.activePage = 1;
    },
    renderSecondPage: (state) => {
      state.activePage = 2;
    },
    renderThirdPage: (state) => {
      state.activePage = 3;
    },
    renderFourthPage: (state) => {
      state.activePage = 4;
    },
  },
});


export const {
  renderNextPage,
  renderPrevPage,
  renderFirstPage,
  renderSecondPage,
  renderThirdPage,
  renderFourthPage,
} = pageSlice.actions;

export const getCurrentPage = (state) => state.page.activePage;

export default pageSlice.reducer;
