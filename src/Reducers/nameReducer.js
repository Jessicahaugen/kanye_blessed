import { MAKEUSER } from "../ActionTypes/userActionTypes";

const initialState = ''

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
      case MAKEUSER:
        return (state = ` { ${action.payload} -eezy }`);
      default:
        return state;
    }
  };
  
  export default nameReducer;
