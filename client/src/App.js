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

function App(props) {
    return (
        <div className="App">
            <div>Number Wrong: {props.numberWrong}</div>

            <button onClick={() => props.increaseNumWrong()}>
                Increase Count
            </button>

            <button onClick={() => props.decreaseNumWrong()}>
                Decrease Count
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseNumWrong: () => dispatch(increaseNumWrong()),

        decreaseNumWrong: () => dispatch(decreaseNumWrong()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
