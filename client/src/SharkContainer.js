function SharkContainer() {
    const numIncorrectLetters = 0;
    return (
        <div className="stacked-div shark-container">
            <img
                className="wave-img"
                id="wave-img"
                src={require(`./images/${
                    numIncorrectLetters + 1
                }-position.png`)}
                alt="Waves"
            />
        </div>
    );
}
export default SharkContainer;
