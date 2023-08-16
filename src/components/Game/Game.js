import React from 'react';
import GuessResults from '../GuessResults/GuessResults';
import GuessInput from '../GuessInput/GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmittedGuess(pendingGuess) {
    setGuesses([...guesses, pendingGuess]);
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
      />
      <GuessInput handleSubmittedGuess={handleSubmittedGuess} />
    </>
  );
}

export default Game;
