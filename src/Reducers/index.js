import { combineReducers } from "redux";
import configReducer from "./configReducer";
import appReducer from "./appReducer";

export default combineReducers({
  configReducer,
  appReducer,
});
