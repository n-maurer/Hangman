import { UPDATE_WORD_PROGRESS } from "./word-progress.types";

const wod = "Test Word";
const progressArr = [];
const wodArr = [];
for (let i of wod) {
    if (i === " ") {
        progressArr.push(" ");
    } else {
        progressArr.push("_");
    }
}
for (let i of wod) {
    if (i === " ") {
        wodArr.push(" ");
    } else {
        wodArr.push(i.toUpperCase());
    }
}

const INITIAL_STATE = {
    wordProgress: progressArr,
    wordOfDay: wodArr,
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
