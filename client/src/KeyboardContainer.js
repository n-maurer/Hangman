import { useState } from "react";

function KeyboardContainer() {
    const [typedWord, setTypedWord] = useState("");

    const handleLetterAddition = (event) => {
        setTypedWord(typedWord.concat(event));
    };
    const handleBackspace = (event) => {
        setTypedWord(typedWord.slice(0, -1));
    };

    var topRowLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    var middleRowLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    var bottomRowLetters = ["Z", "X", "C", "V", "B", "N", "M"];
    return (
        <div className="stacked-div keyboard-container">
            <div>{typedWord}</div>
            <div className="keyboard-top-row">
                {topRowLetters.map((letter) => {
                    return (
                        <div className="letter-key">
                            <button
                                type="button"
                                value={letter}
                                onClick={() => handleLetterAddition(letter)}>
                                <div className="test">{letter}</div>
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="keyboard-middle-row">
                {middleRowLetters.map((letter) => {
                    return (
                        <div className="letter-key">
                            <button
                                type="button"
                                value={letter}
                                onClick={() => handleLetterAddition(letter)}>
                                <div className="test">{letter}</div>
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="keyboard-bottom-row">
                <div className="letter-key enter">
                    <button type="button" data-key="Enter">
                        <div className="test">Etr</div>
                    </button>
                </div>
                {bottomRowLetters.map((letter) => {
                    return (
                        <div className="letter-key">
                            <button
                                type="button"
                                value={letter}
                                onClick={() => handleLetterAddition(letter)}>
                                <div className="test">{letter}</div>
                            </button>
                        </div>
                    );
                })}
                <div className="letter-key">
                    <button
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
export default KeyboardContainer;
