import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Configuration {
  activeStep: number;
  selectedHours: string;
  selectedDays: string;
  tags: string[];
  about: string;
}

const initialState: Configuration = {
  activeStep: 0,
  selectedHours: '',
  selectedDays: '',
  tags: [],
  about: '',
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
    setTag: (state, { payload }: PayloadAction<string>) => {
      state.tags = [...state.tags, payload];
    },
    deleteTag: (state, { payload }: PayloadAction<string>) => {
      state.tags = state.tags.filter((tag) => tag !== payload);
    },
    setAbout: (state, { payload }: PayloadAction<string>) => {
      state.about = payload;
    },
  },
});

export const {
  nextStep,
  previousStep,
  setSelectedHours,
  setSelectedDays,
  setTag,
  deleteTag,
  setAbout,
} = configurationSlice.actions;
export default configurationSlice.reducer;
