import React from 'react';

function GuessInput({ gameStatus, handleSubmittedGuess, restartOccurred }) {
  const [pedningGuess, setPendingGuess] = React.useState('');

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (restartOccurred && gameStatus === 'running') {
      inputRef.current.focus();
    }
  }, [restartOccurred, gameStatus]);

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
        ref={inputRef}
        disabled={gameStatus !== 'running'}
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
