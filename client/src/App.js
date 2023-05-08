import logo from "./logo.svg";
import "./main.css";
import HeaderContainer from "./HeaderContainer";
import AlphabetContainer from "./AlphabetContainer";
import CategoryContainer from "./CategoryContainer";
import SharkContainer from "./SharkContainer";
import WordProgressContainer from "./WordProgressContainer";
import KeyboardContainer from "./KeyboardContainer";

function App() {
    return (
        <div className="App">
            <div className="game-container">
                <HeaderContainer />
                <AlphabetContainer />
                <CategoryContainer />
                <SharkContainer />
                <WordProgressContainer />
                <KeyboardContainer />
            </div>
        </div>
    );
}

export default App;
