import React, { useState } from "react";

function GuessInput({ handleAddGuesses, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tentativeGuess.length !== 5) {
      return;
    }

    handleAddGuesses(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        autoComplete="off"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
