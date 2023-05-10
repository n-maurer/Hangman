import {
    UPDATE_WORD_PROGRESS,
    UPDATE_WORD_OF_DAY,
    UPDATE_WORD_OF_DAY_EMPTY,
    UPDATE_LOADING_TO_FALSE,
    UPDATE_WORD_OF_DAY_CATEGORY,
    UPDATE_WORD_OF_DAY_DATE,
} from "./word-progress.types";

export const updateWordProgress = (index, letter) => {
    return {
        type: UPDATE_WORD_PROGRESS,
        payload: {
            index: index,
            letter: letter,
        },
    };
};

export const updateWordOfDay = (arr) => {
    return {
        type: UPDATE_WORD_OF_DAY,
        payload: {
            arr,
        },
    };
};

export const updateWordOfDayEmpty = (array) => {
    return {
        type: UPDATE_WORD_OF_DAY_EMPTY,
        payload: {
            array,
        },
    };
};
export const updateLoading = (bool) => {
    return {
        type: UPDATE_LOADING_TO_FALSE,
        payload: {
            bool,
        },
    };
};

export const updateWordOfDayCategory = (category) => {
    return {
        type: UPDATE_WORD_OF_DAY_CATEGORY,
        payload: {
            category,
        },
    };
};

export const updateWordOfDayDate = (date) => {
    return {
        type: UPDATE_WORD_OF_DAY_DATE,
        payload: {
            date,
        },
    };
};
