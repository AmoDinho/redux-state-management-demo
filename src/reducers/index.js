import { layoutsReducer } from "./layoutReducer";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
export default () =>
  combineReducers({
    router: connectRouter(),
    layoutsReducer,
  });
