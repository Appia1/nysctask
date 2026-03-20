import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* 
  Async thunk for submitting registration
  Replace the simulated API call with your real backend endpoint
*/
export const submitRegistration = createAsyncThunk(
  "registration/submitRegistration",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState().registration;

      const payload = {
        bio: state.bio,
        school: state.school,
        medical: state.medical,
        camp: state.camp,
      };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue("Submission failed");
    }
  }
);

const initialState = {
  step: 1,
  bio: {},
  school: {},
  medical: {},
  camp: {},

  loading: false,
  success: false,
  error: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step < 4) {
        state.step += 1;
      }
    },
    prevStep: (state) => {
      if (state.step > 1) {
        state.step -= 1;
      }
    },

    saveBio: (state, action) => {
      state.bio = action.payload;
    },
    saveSchool: (state, action) => {
      state.school = action.payload;
    },
    saveMedical: (state, action) => {
      state.medical = action.payload;
    },
    saveCamp: (state, action) => {
      state.camp = action.payload;
    },

    resetRegistration: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(submitRegistration.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitRegistration.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitRegistration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  nextStep,
  prevStep,
  saveBio,
  saveSchool,
  saveMedical,
  saveCamp,
  resetRegistration,
} = registrationSlice.actions;

export default registrationSlice.reducer;