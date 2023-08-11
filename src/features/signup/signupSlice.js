import { createSlice } from '@reduxjs/toolkit'

const initialState = { username: "" }

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    }
  }
})

export const { setUsername } = signupSlice.actions

export const signupReducer  = signupSlice.reducer