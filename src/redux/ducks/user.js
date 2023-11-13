import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: true,
    //firstName: "Ilan"
  },
  reducers: {
    getUser: (state, actions) => {
        console.log("reducers getUser ")
        console.log(state)
    },
    setUser: (state, actions) => {
        console.log("user reducer setUser")
      const data = actions.payload;
      console.log(data)
      return { ...data };
    }
  }
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
