import { connect } from "react-redux";

function HeaderContainer(props) {
    var date = props.wordOfDayDate;

    return (
        <div className="stacked-div header-container">
            <img
                className="header-logo"
                id="header-logo"
                src={require("./images/logos/sharkbait-high-resolution-logo-color-on-transparent-background.png")}
                alt="Shark Bait Logo"
            />
            {date === "loading" ? (
                <div className="loading-circle"></div>
            ) : (
                // <div>{date}</div>
                <div></div>
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
