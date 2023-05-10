import { connect } from "react-redux";

function HeaderContainer(props) {
    var date = props.wordOfDayDate;

    return (
        <div className="stacked-div header-container">
            {date === "loading" ? (
                <div className="loading-circle"></div>
            ) : (
                <div>{date}</div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        wordOfDayDate: state.wordProgress.wordOfDayDate,
    };
};
export default connect(mapStateToProps)(HeaderContainer);
