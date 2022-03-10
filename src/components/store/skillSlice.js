import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
  name: "skillData",
  initialState: {
    items: [],
    error: "enter at Least 1 Skill",
    validSkills: false,
  },
  reducers: {
    addSkill: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.title === newItem.selectedLanguage
      );
      if (state.items.length >= 0) {
        state.validSkills = true;
        state.error = "";
      } else {
        state.validSkills = false;
      }
      if (!existingItem) {
        state.items.unshift({
          id: newItem.id,
          title: newItem.selectedLanguage,
          experience: newItem.year,
        });
      } else {
        state.error = "You Already Added That Skill!";
      }
    },
    addError: (state, action) => {
      state.error = action.payload.error;
    },
    removeSkill: (state, action) => {
      const { title } = action.payload;
      state.items = state.items.filter((item) => item.title !== title);
      if (state.items.length === 0) {
        state.validSkills = false;
        state.error = "enter at Least 1 Skill";
      }
    },
  },
});

export const skillActions = skillSlice.actions;

export default skillSlice.reducer;
