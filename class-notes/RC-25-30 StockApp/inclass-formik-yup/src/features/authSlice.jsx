import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state,{payload})=>{
    //  console.log(payload);
    state.loading = false;
    state.currentUser=payload.data.username // burdaki json formatinin icindeki gelen data

    },

    fetchFail: state => {
      state.loading = false;
      state.error = true;
      state.token=payload.token
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess,
} = authSlice.actions;
export default authSlice.reducer;
