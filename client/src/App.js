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
    return (
        <div className="App">
            <div className="game-container">
                {props.wordOfDay.every(
                    (value, index) => value === props.wordProgress[index]
                ) === true ? (
                    <>
                        <HeaderContainer />
                        <AlphabetContainer />
                        <CategoryContainer />
                        <SharkContainer />
                        <WordProgressContainer />
                        <div className="complete-container">Complete</div>
                    </>
                ) : (
                    <>
                        {props.numberWrong === 6 ? (
                            <>
                                <HeaderContainer />
                                <AlphabetContainer />
                                <CategoryContainer />
                                <SharkContainer />
                                <WordProgressContainer />
                                <div className="complete-container">Lose</div>
                            </>
                        ) : (
                            <>
                                <HeaderContainer />
                                <AlphabetContainer />
                                <CategoryContainer />
                                <SharkContainer />
                                <WordProgressContainer />
                                <KeyboardContainer />
                            </>
                        )}
                    </>
                )}
            </div>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // increaseNumWrong: () => dispatch(increaseNumWrong()),

//         decreaseNumWrong: () => dispatch(decreaseNumWrong()),

//         // changeLetterStatus: () => dispatch(changeLetterStatus("A", true)),

//         updateWordProgress: () => dispatch(updateWordProgress(0, "T")),
//     };
// };

export default connect(mapStateToProps)(App);
