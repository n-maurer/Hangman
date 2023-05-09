import { connect } from "react-redux";

function HeaderContainer(props) {
    return (
        <div className="stacked-div header-container">
            {props.wordOfDayDate}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        wordOfDayDate: state.wordProgress.wordOfDayDate,
    };
};
export default connect(mapStateToProps)(HeaderContainer);
