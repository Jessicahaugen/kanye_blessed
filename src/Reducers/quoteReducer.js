import {GETQUOTES} from "../ActionTypes/quoteActionTypes";

const initialState = {
  quote:'',
}                     
;

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETQUOTES:
      return (state = action.payload);
    default:
      return state;
  }
};

export default quoteReducer;