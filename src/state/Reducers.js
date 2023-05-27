import { combineReducers } from "redux";
import { SET_API_DATA } from "./Actions";

const apiDataReducer = (state = null, action) => {
  switch (action.type) {
    case SET_API_DATA:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  apiData: apiDataReducer,
});

export default rootReducer;
