import { UPDATE_WORD_PROGRESS } from "./word-progress.types";

export const updateWordProgress = (index, letter) => {
    return {
        type: UPDATE_WORD_PROGRESS,
        payload: {
            index: index,
            letter: letter,
        },
    };
};
