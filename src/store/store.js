import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactModalReducer from '../components/Contact/contactModalSlice'
export default configureStore({
    reducer: {
        contactModal: contactModalReducer
    },
    middleware: [...getDefaultMiddleware()]
})