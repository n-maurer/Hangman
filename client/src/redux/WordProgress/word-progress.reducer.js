import { UPDATE_WORD_PROGRESS } from "./word-progress.types";

const wod = "Test Word";
const wodArr = [];
for (let i of wod) {
    if (i === " ") {
        wodArr.push(" ");
    } else {
        wodArr.push("_");
    }
}

const INITIAL_STATE = {
    wordProgress: wodArr,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_WORD_PROGRESS:
            const { index, letter } = action.payload;
            const updatedWordProgress = [...state.wordProgress];
            updatedWordProgress[index] = letter;

            return {
                ...state,
                wordProgress: updatedWordProgress,
            };

        default:
            return state;
    }
};

export default reducer;
