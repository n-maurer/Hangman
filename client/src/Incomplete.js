import React from "react";

function Incomplete() {
    const messages = [
        "You did not get the word...",
        "Better luck next time!",
        "Oh well...",
        "Oh no...",
        "You lost...",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    return <div className="complete lose">{randomMessage}</div>;
}

export default Incomplete;
