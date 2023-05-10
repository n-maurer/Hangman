import { connect } from "react-redux";

function CategoryContainer(props) {
    return (
        <div className="stacked-div category-container">
            {props.wordOfDayCategory === "loading" ? (
                <>
                    <div className="loading-circle"></div>
                </>
            ) : (
                <div className="category-name">{props.wordOfDayCategory}</div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        wordOfDayCategory: state.wordProgress.wordOfDayCategory,
    };
};
export default connect(mapStateToProps)(CategoryContainer);
