import { combineReducers } from "redux";

import numberWrongReducer from "./NumberWrong/num-wrong.reducer";

const rootReducer = combineReducers({
    counter: numberWrongReducer,
});

export default rootReducer;
