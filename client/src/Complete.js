import React from "react";

function Complete() {
    const messages = [
        "Good job!",
        "You win!",
        "Congrats!",
        "You got it!",
        "That's right!",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    return <div className="complete">{randomMessage}</div>;
}

export default Complete;
