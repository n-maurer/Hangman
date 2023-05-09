import { CHANGE_LETTER_STATUS } from "./letters-used.types";

const INITIAL_STATE = {
    lettersUsed: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: false,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: false,
        Z: false,
    },
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LETTER_STATUS:
            const { letter, status } = action.payload;
            return {
                ...state,
                lettersUsed: {
                    ...state.lettersUsed,
                    [letter]: status,
                },
            };

        default:
            return state;
    }
};

export default reducer;
