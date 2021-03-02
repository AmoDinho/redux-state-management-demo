import { layoutsReducer } from "./layoutReducer";
import { mountainReducer } from "./mountainReducer";
import { combineReducers } from "redux";
export default () =>
  combineReducers({
    layoutsReducer,
    mountainReducer,
  });
