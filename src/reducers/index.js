import { layoutsReducer } from "./layoutReducer";
import { combineReducers } from "redux";
export default () =>
  combineReducers({
    layoutsReducer,
  });
