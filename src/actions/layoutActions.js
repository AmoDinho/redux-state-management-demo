import * as types from "./actionTypes";

export const setPageHeader = (pageTitle) => {
  const dispatchResult = (dispatch) => {
    dispatch({
      type: types.SET_PAGE_HEADER,
      result: {
        pageTitle,
      },
    });
  };
  return dispatchResult;
};
