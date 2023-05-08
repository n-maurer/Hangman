function WordProgressContainer() {
    const word = "Spongebob Squarepants";
    const splitWord = word.split("");

    const currentProgress = [];
    for (let i of splitWord) {
        if (i === " ") {
            currentProgress.push(" ");
        } else currentProgress.push("_");
    }

    return (
        <div className="stacked-div word-progress-container">
            <div className="letter-spaces-container">
                {currentProgress.map((letter) => {
                    return (
                        <>
                            {letter === " " ? (
                                <div className="new-line"></div>
                            ) : (
                                <div className="letter-space"> </div>
                            )}
                        </>
                    );
                })}
            </div>
        </div>
    );
}
export default WordProgressContainer;
