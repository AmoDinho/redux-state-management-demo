import * as types from "../actions/actionTypes";
import initalState from "./initialState";

export const layoutsReducer = (state = initalState.pageHeader, action) => {
  // console.log("state", state, action);
  let s = { ...state };
  switch (action.type) {
    case types.SET_PAGE_HEADER:
      s.pageHeader = { ...action.result };
      return s;
    default:
      return state;
  }
};
