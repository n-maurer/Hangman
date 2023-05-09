import { combineReducers } from "redux";

import numberWrongReducer from "./NumberWrong/num-wrong.reducer";
import letterStatusReducer from "./LettersUsed/letters-used.reducer";
import wordProgressReducer from "./WordProgress/word-progress.reducer";

const rootReducer = combineReducers({
    counter: numberWrongReducer,
    changeLetterStatus: letterStatusReducer,
    wordProgress: wordProgressReducer,
});

export default rootReducer;
