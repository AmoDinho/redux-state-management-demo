import * as types from "../actions/actionTypes";
import initalState from "./initialState";

export const mountainReducer = (state = initalState.mountains, action) => {
  let s = { ...state };
  switch (action.type) {
    case types.ADD_NEW_MOUNTAIN:
      let copyArray = [...s.mountains];
      copyArray.push(action.result);
      s.mountains = copyArray;
      return s;
    default:
      return state;
  }
};
