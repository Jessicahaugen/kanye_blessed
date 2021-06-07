import {MAKEUSER} from '../ActionTypes/userActionTypes'

export const user = (dispatch,inputValue) => {
  return dispatch({ type: MAKEUSER, payload:inputValue});
};