import {
    UPDATE_WORD_OF_DAY,
    UPDATE_WORD_PROGRESS,
    UPDATE_WORD_OF_DAY_EMPTY,
    UPDATE_LOADING_TO_FALSE,
    UPDATE_WORD_OF_DAY_CATEGORY,
    UPDATE_WORD_OF_DAY_DATE,
} from "./word-progress.types";

const wod = { name: "Tarzan", category: "Movies", date: "5/9/2023" };
const progressArr = [];
const wodArr = [];
for (let i of wod["name"]) {
    if (i === " ") {
        progressArr.push(" ");
    } else {
        progressArr.push("_");
    }
}
for (let i of wod["name"]) {
    if (i === " ") {
        wodArr.push(" ");
    } else {
        wodArr.push(i.toUpperCase());
    }
}

const INITIAL_STATE = {
    wordProgress: "loading",
    wordOfDay: wodArr,
    wordOfDayCategory: "loading",
    wordOfDayDate: "loading",
    loading: true,
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

        case UPDATE_WORD_OF_DAY:
            var { arr } = action.payload;
            var updatedWordOfDay = [...state.wordOfDay];
            updatedWordOfDay = arr;
            return {
                ...state,
                wordOfDay: updatedWordOfDay,
            };
        case UPDATE_WORD_OF_DAY_EMPTY:
            var { array } = action.payload;
            var updatedWordOfDayEmpty = [...state.wordProgress];
            updatedWordOfDayEmpty = array;
            return {
                ...state,
                wordProgress: updatedWordOfDayEmpty,
            };

        case UPDATE_WORD_OF_DAY_CATEGORY:
            const { category } = action.payload;
            return {
                ...state,
                wordOfDayCategory: category,
            };

        case UPDATE_WORD_OF_DAY_DATE:
            const { date } = action.payload;
            return {
                ...state,
                wordOfDayDate: date,
            };

        case UPDATE_LOADING_TO_FALSE:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};

export default reducer;
