import { INCREMENT, DECREMENT } from "./num-wrong.types";

export const increaseNumWrong = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseNumWrong = () => {
    return {
        type: DECREMENT,
    };
};
