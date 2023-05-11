import React, { useState } from "react";
import { connect } from "react-redux";
import { increaseNumWrong } from "./redux/NumberWrong/num-wrong.actions";
import { changeLetterStatus } from "./redux/LettersUsed/letters-used.actions";
import { updateWordProgress } from "./redux/WordProgress/word-progress.actions";

function KeyboardContainer(props) {
    const [typedWord, setTypedWord] = useState("");

    const handleLetterAddition = (event) => {
        setTypedWord(event);
    };

    // const handleBackspace = () => {
    //     setTypedWord(typedWord.slice(0, -1));
    // };

    const handleEnter = () => {
        props.changeLetterStatus(typedWord, true);
        if (props.wordOfDay.includes(typedWord) === false) {
            props.increaseNumWrong();
        } else {
            for (let i in props.wordOfDay) {
                if (props.wordOfDay[i] === typedWord) {
                    props.updateWordProgress(i, typedWord);
                }
            }
        }
        setTypedWord("");
    };

    var topRowLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    var middleRowLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    var bottomRowLetters = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
        <div className="stacked-div keyboard-container">
            <div className="keyboard-top-row">
                {topRowLetters.map((letter) => {
                    if (letter === typedWord) {
                        return (
                            <button
                                className="letter-button-pressed"
                                disabled
                                type="button"
                                value={letter}
                                onClick={() => handleLetterAddition(letter)}>
                                <div className="letter-key">{letter}</div>
                            </button>
                        );
                    } else {
                        if (props.lettersUsed[letter] === true) {
                            return (
                                <button
                                    className="letter-button disabled"
                                    disabled
                                    type="button"
                                    value={letter}
                                    onClick={() =>
                                        handleLetterAddition(letter)
                                    }>
                                    <div className="letter-key">{letter}</div>
                                </button>
                            );
                        } else {
                            return (
                                <button
                                    className="letter-button"
                                    type="button"
                                    value={letter}
                                    onClick={() =>
                                        handleLetterAddition(letter)
                                    }>
                                    <div className="letter-key">{letter}</div>
                                </button>
                            );
                        }
                    }
                })}
            </div>
            <div className="keyboard-middle-row">
                {middleRowLetters.map((letter) => {
                    if (letter === typedWord) {
                        return (
                            <button
                                className="letter-button-pressed"
                                disabled
                                type="button"
                                value={letter}
                                onClick={() => handleLetterAddition(letter)}>
                                <div className="letter-key">{letter}</div>
                            </button>
                        );
                    } else {
                        if (props.lettersUsed[letter] === true) {
                            return (
                                <button
                                    className="letter-button disabled"
                                    disabled
                                    type="button"
                                    value={letter}
                                    onClick={() =>
                                        handleLetterAddition(letter)
                                    }>
                                    <div className="letter-key">{letter}</div>
                                </button>
                            );
                        } else {
                            return (
                                <button
                                    className="letter-button"
                                    type="button"
                                    value={letter}
                                    onClick={() =>
                                        handleLetterAddition(letter)
                                    }>
                                    <div className="letter-key">{letter}</div>
                                </button>
                            );
                        }
                    }
                })}
            </div>
            <div className="keyboard-bottom-row">
                <div className="letter-key enter">
                    <div className="test" onClick={handleEnter}>
                        <button
                            type="button"
                            data-key="Enter"
                            className="letter-button">
                            Enter
                        </button>
                    </div>
                </div>
                {bottomRowLetters.map((letter) => {
                    if (letter === typedWord) {
                        return (
                            <button
                                className="letter-button-pressed"
                                disabled
                                type="button"
                                value={letter}
                                onClick={() => handleLetterAddition(letter)}>
                                <div className="letter-key">{letter}</div>
                            </button>
                        );
                    } else {
                        if (props.lettersUsed[letter] === true) {
                            return (
                                <button
                                    className="letter-button disabled"
                                    disabled
                                    type="button"
                                    value={letter}
                                    onClick={() =>
                                        handleLetterAddition(letter)
                                    }>
                                    <div className="letter-key">{letter}</div>
                                </button>
                            );
                        } else {
                            return (
                                <button
                                    className="letter-button"
                                    type="button"
                                    value={letter}
                                    onClick={() =>
                                        handleLetterAddition(letter)
                                    }>
                                    <div className="letter-key">{letter}</div>
                                </button>
                            );
                        }
                    }
                })}
            </div>
            <div className="keyboard-middle-row"></div>
            <div className="keyboard--row"></div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numberWrong: state.counter.numberWrong,
        lettersUsed: state.changeLetterStatus.lettersUsed,
        wordProgress: state.wordProgress.wordProgress,
        wordOfDay: state.wordProgress.wordOfDay,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseNumWrong: () => dispatch(increaseNumWrong()),
        changeLetterStatus: (letter, status) =>
            dispatch(changeLetterStatus(letter, status)),
        updateWordProgress: (index, letter) =>
            dispatch(updateWordProgress(index, letter)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardContainer);
