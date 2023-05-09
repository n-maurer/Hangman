import logo from "./logo.svg";
import "./main.css";
import HeaderContainer from "./HeaderContainer";
import AlphabetContainer from "./AlphabetContainer";
import CategoryContainer from "./CategoryContainer";
import SharkContainer from "./SharkContainer";
import WordProgressContainer from "./WordProgressContainer";
import KeyboardContainer from "./KeyboardContainer";
import { connect } from "react-redux";
import {
    increaseNumWrong,
    decreaseNumWrong,
} from "./redux/NumberWrong/num-wrong.actions";
import { changeLetterStatus } from "./redux/LettersUsed/letters-used.actions";
import { updateWordProgress } from "./redux/WordProgress/word-progress.actions";

function App(props) {
    // console.log("Letters Used:", props.lettersUsed);
    // console.log("Word Progress:", props.wordProgress);
    return (
        <div className="App">
            <div>Number Wrong: {props.numberWrong}</div>

            <button onClick={() => props.increaseNumWrong()}>
                Increase Count
            </button>

            <button onClick={() => props.decreaseNumWrong()}>
                Decrease Count
            </button>

            <button onClick={() => props.changeLetterStatus()}>
                Press "A"
            </button>

            <button onClick={() => props.updateWordProgress()}>
                Word Progress update
            </button>

            <div className="game-container">
                <HeaderContainer />
                <AlphabetContainer />
                <CategoryContainer />
                <SharkContainer />
                <WordProgressContainer />
                <KeyboardContainer />
            </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        increaseNumWrong: () => dispatch(increaseNumWrong()),

        decreaseNumWrong: () => dispatch(decreaseNumWrong()),

        changeLetterStatus: () => dispatch(changeLetterStatus("A", true)),

        updateWordProgress: () => dispatch(updateWordProgress(0, "T")),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
