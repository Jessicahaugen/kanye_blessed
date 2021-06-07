import { GETQUOTES } from "../ActionTypes/quoteActionTypes"

export const getQuotes = (dispatch, quotes) => {
  return dispatch({ type: GETQUOTES, payload: quotes });
};