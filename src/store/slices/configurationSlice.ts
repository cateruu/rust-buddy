import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Configuration {
  activeStep: number;
  selectedHours: string;
  selectedDays: string;
}

const initialState: Configuration = {
  activeStep: 0,
  selectedHours: '',
  selectedDays: '',
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
    setSelectedHours: (state, { payload }: PayloadAction<string>) => {
      state.selectedHours = payload;
    },
    setSelectedDays: (state, { payload }: PayloadAction<string>) => {
      state.selectedDays = payload;
    },
  },
});

export const { nextStep, previousStep, setSelectedHours, setSelectedDays } =
  configurationSlice.actions;
export default configurationSlice.reducer;
