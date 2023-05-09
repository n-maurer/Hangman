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
    increaseCounter,
    decreaseCounter,
} from "./redux/Counter/counter.actions";

function App(props) {
    return (
        <div className="App">
            <div>Count: {props.count}</div>

            <button onClick={() => props.increaseCounter()}>
                Increase Count
            </button>

            <button onClick={() => props.decreaseCounter()}>
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
        count: state.counter.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),

        decreaseCounter: () => dispatch(decreaseCounter()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
