import {combineReducers} from "@reduxjs/toolkit";
import * as contactReducer from "./contacts/contacts.slice";

/**
 *
 */
const rootReducer = combineReducers({
    [contactReducer.contactFeatureKey]: contactReducer.contactSlice.reducer
});
export default rootReducer;