import { GETQUOTES } from "../ActionTypes/quoteActionTypes"

export const getQuotes = async (dispatch) => {
  const response = await fetch( "https://api.kanye.rest");
  const jsonQuote = await response.json();

  return dispatch({ type: GETQUOTES, payload: jsonQuote});
};

