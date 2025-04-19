import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainreducer";
import jobReducer from "../reducers/jobreducer";
const combReducer = combineReducers({
  favourite: mainReducer,
  job: jobReducer,
});

const store = configureStore({
  reducer: combReducer,
});

export default store;
