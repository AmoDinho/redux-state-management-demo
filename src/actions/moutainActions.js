import * as types from "./actionTypes";

export const addNewMountain = (mountain) => {
  const dispatchResult = (dispatch) => {
    dispatch({
      type: types.ADD_NEW_MOUNTAIN,
      result: mountain,
    });
  };

  return dispatchResult;
};
