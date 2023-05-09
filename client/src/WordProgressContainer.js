function WordProgressContainer() {
    const word = "Lion King";
    const splitWord = word.split("");

    const currentProgress = [];
    for (let i of splitWord) {
        if (i === " ") {
            currentProgress.push(" ");
        } else currentProgress.push("_");
    }

    var currentLetter = "K";
    for (let letter in splitWord) {
        if (splitWord[letter].toLowerCase() === currentLetter.toLowerCase()) {
            currentProgress[letter] = splitWord[letter];
        }
    }
    var currentLetter2 = "L";
    for (let letter in splitWord) {
        if (splitWord[letter].toLowerCase() === currentLetter2.toLowerCase()) {
            currentProgress[letter] = splitWord[letter];
        }
    }
    var currentLetter3 = "I";
    for (let letter in splitWord) {
        if (splitWord[letter].toLowerCase() === currentLetter3.toLowerCase()) {
            currentProgress[letter] = splitWord[letter];
        }
    }

    console.log(currentProgress);

    return (
        <div className="stacked-div word-progress-container">
            <div className="letter-spaces-container">
                {currentProgress.map((letter) => {
                    return (
                        <>
                            {letter === " " ? (
                                <div className="new-line"></div>
                            ) : (
                                <>
                                    {letter === "_" ? (
                                        <div className="letter-space"> </div>
                                    ) : (
                                        <div className="letter-space">
                                            <div className="letter-text">
                                                {letter}
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    );
                })}
            </div>
        </div>
    );
}
export default WordProgressContainer;
