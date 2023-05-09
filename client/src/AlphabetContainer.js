import { connect } from "react-redux";

function AlphabetContainer(props) {
    return (
        <div className="stacked-div alphabet-container">
            <div className="first-half-alphabet">
                {Object.entries(props.lettersUsed)
                    .slice(0, 13)
                    .map(([letter, value], index) => {
                        if (!value) {
                            return (
                                <div key={index} className="letter ">
                                    {letter}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={index}
                                    className="letter strikethrough-letter">
                                    {letter}
                                </div>
                            );
                        }
                    })}
            </div>
            <div className="second-half-alphabet">
                {Object.entries(props.lettersUsed)
                    .slice(13, 26)
                    .map(([letter, value], index) => {
                        if (!value) {
                            return (
                                <div key={index} className="letter ">
                                    {letter}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={index}
                                    className="letter strikethrough-letter">
                                    {letter}
                                </div>
                            );
                        }
                    })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        lettersUsed: state.changeLetterStatus.lettersUsed,
    };
};

export default connect(mapStateToProps)(AlphabetContainer);
