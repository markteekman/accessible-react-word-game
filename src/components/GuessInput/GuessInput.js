import React from 'react';

function GuessInput({ handleSubmittedGuess }) {
  const [pedningGuess, setPendingGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmittedGuess(pedningGuess);
    setPendingGuess('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={pedningGuess}
        onChange={(event) => setPendingGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
