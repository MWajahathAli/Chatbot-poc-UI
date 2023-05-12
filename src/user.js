import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
name: "user",
initialState: { value: {email: 0},value1:{catoption:false}},
reducers: {
    login: (state, action) => {
state.value = action.payload
}, 
catOption:(state,action) => {
    state.value1 = action.payload
}
}
})

export const {login,catOption} = userSlice.actions

export default userSlice.reducer;