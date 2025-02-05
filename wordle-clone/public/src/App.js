import React, { useState } from "react";
import { getRandomWord, WORDS } from "./utils/wordList";
import { getFeedback, isValidWord } from "./utils/helpers";
import Grid from "./components/Grid";
import WordInput from "./components/WordInput";
import Message from "./components/Message";

const App = () => {
  const [word, setWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [gameStatus, setGameStatus] = useState("playing");

  const handleSubmit = () => {
    if (currentInput.length !== 5 || !isValidWord(currentInput)) return;
    const feedback = getFeedback(word, currentInput);
    const newGuesses = [...guesses, { word: currentInput, feedback }];
    
    setGuesses(newGuesses);
    setCurrentInput("");

    if (currentInput === word) setGameStatus("won");
    else if (newGuesses.length >= 6) setGameStatus("lost");
  };

  const handleRestart = () => {
    setWord(getRandomWord());
    setGuesses([]);
    setCurrentInput("");
    setGameStatus("playing");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Wordle Clone</h1>
      <Grid guesses={guesses} />
      <WordInput 
        value={currentInput} 
        setValue={setCurrentInput} 
        onSubmit={handleSubmit} 
        disabled={gameStatus !== "playing"} 
      />
      {gameStatus !== "playing" && <Message status={gameStatus} word={word} onRestart={handleRestart} />}
    </div>
  );
};

export default App;
