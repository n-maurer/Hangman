import { CHANGE_LETTER_STATUS } from "./letters-used.types";

export const changeLetterStatus = (letter, status) => {
    return {
        type: CHANGE_LETTER_STATUS,
        payload: {
            letter: letter,
            status: status,
        },
    };
};
