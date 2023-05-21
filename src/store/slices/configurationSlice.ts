import { createSlice } from '@reduxjs/toolkit';

interface Configuration {
  activeStep: number;
}

const initialState: Configuration = {
  activeStep: 0,
};

export const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.activeStep = ++state.activeStep;
    },
    previousStep: (state) => {
      state.activeStep = --state.activeStep;
    },
  },
});

export const { nextStep, previousStep } = configurationSlice.actions;
export default configurationSlice.reducer;
