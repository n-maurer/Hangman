import { connect } from "react-redux";

function HeaderContainer(props) {
    var date = props.wordOfDayDate;
    const month = date.charAt(5) + date.charAt(6);
    const day = date.charAt(8) + date.charAt(9);
    const year = date.slice(0, 4);
    const formattedDate = `${month}/${day}/${year}`;

    return (
        <div className="stacked-div header-container">
            {date === "loading" ? (
                <div className="loading-circle"></div>
            ) : (
                <div>{formattedDate}</div>
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
