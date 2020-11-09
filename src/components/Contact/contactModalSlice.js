import { createSlice } from '@reduxjs/toolkit'

export const contactModalSlice = createSlice({
    name: "contactModal",
    initialState: true, 
    reducers: {
        toggleContactModalState: (state) => !state
        
    }
})

export const { toggleContactModalState } = contactModalSlice.actions;
export default contactModalSlice.reducer;