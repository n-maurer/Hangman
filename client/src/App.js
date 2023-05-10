import logo from "./logo.svg";
import "./main.css";
import HeaderContainer from "./HeaderContainer";
import AlphabetContainer from "./AlphabetContainer";
import CategoryContainer from "./CategoryContainer";
import SharkContainer from "./SharkContainer";
import WordProgressContainer from "./WordProgressContainer";
import KeyboardContainer from "./KeyboardContainer";
import { connect } from "react-redux";
import { updateWordOfDay } from "./redux/WordProgress/word-progress.actions";
import { updateWordOfDayEmpty } from "./redux/WordProgress/word-progress.actions";
import WordOfDayAPI from "./apis/WordOfDayAPI";
import { useEffect } from "react";
import { updateLoading } from "./redux/WordProgress/word-progress.actions";
import { updateWordOfDayCategory } from "./redux/WordProgress/word-progress.actions";
import { updateWordOfDayDate } from "./redux/WordProgress/word-progress.actions";
import TestDiv from "./TestDiv";

function App(props) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await WordOfDayAPI.get("/word-of-day");
                var wod = response.data.data.word_of_day[0].word_name;
                const wodArr = [];
                const progressArr = [];
                for (let i of wod) {
                    progressArr.push(i === " " ? " " : "_");
                    wodArr.push(i === " " ? " " : i.toUpperCase());
                }
                props.updateWordOfDayEmpty(progressArr);
                props.updateWordOfDay(wodArr);
                props.updateWordOfDayCategory(
                    response.data.data.word_of_day[0].category_name
                );
                props.updateWordOfDayDate(
                    response.data.data.word_of_day[0].date
                );
                // props.updateLoading(false);
            } catch (err) {}
        };
        fetchData();
    }, []);

    return (
        <div className="app">
            <TestDiv />
            <div className="game-container">
                <>
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
                                    <div className="complete-container">
                                        Lose
                                    </div>
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
                </>
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
        loading: state.wordProgress.loading,
        category: state.wordProgress.wordOfDayCategory,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // increaseNumWrong: () => dispatch(increaseNumWrong()),
        // decreaseNumWrong: () => dispatch(decreaseNumWrong()),
        // changeLetterStatus: () => dispatch(changeLetterStatus("A", true)),
        // updateWordProgress: () => dispatch(updateWordProgress(0, "T")),
        updateWordOfDay: (arr) => dispatch(updateWordOfDay(arr)),
        updateWordOfDayEmpty: (array) => dispatch(updateWordOfDayEmpty(array)),
        updateLoading: (bool) => dispatch(updateLoading(bool)),
        updateWordOfDayCategory: (category) =>
            dispatch(updateWordOfDayCategory(category)),
        updateWordOfDayDate: (date) => dispatch(updateWordOfDayDate(date)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
