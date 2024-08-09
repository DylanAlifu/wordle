import React, { useState } from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner";

const answer = sample(WORDS);
console.log({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [guesses, setGuesses] = useState([]);

  const handleAddGuesses = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleAddGuesses={handleAddGuesses} gameStatus={gameStatus} />
      {gameStatus !== "running" && (
        <GameOverBanner gameStatus={gameStatus} numOfGuesses={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
