import {
    increaseNumWrong,
    decreaseNumWrong,
} from "./redux/NumberWrong/num-wrong.actions";
import { connect } from "react-redux";

function SharkContainer(props) {
    const numIncorrectLetters = props.numberWrong;
    return (
        <div className="stacked-div shark-container">
            <img
                className="wave-img"
                id="wave-img"
                src={require(`./images/shark-container/shark-container-${
                    numIncorrectLetters + 1
                }.png`)}
                alt="Waves"
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(SharkContainer);
