import { useState } from "react";
import { connect } from "react-redux";

function KeyboardContainer(props) {
    const [typedWord, setTypedWord] = useState("");

    const handleLetterAddition = (event) => {
        setTypedWord(event);
    };
    const handleBackspace = (event) => {
        setTypedWord(typedWord.slice(0, -1));
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
                    <button
                        type="button"
                        data-key="Enter"
                        className="letter-button">
                        <div className="test">Enter</div>
                    </button>
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
                <div className="letter-key">
                    <button
                        className="letter-button"
                        type="button"
                        value="Backspace"
                        onClick={handleBackspace}>
                        <div className="test">{"<"}</div>
                    </button>
                </div>
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
    };
};

export default connect(mapStateToProps)(KeyboardContainer);
