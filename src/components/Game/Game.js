import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

import GuessResults from '../GuessResults/GuessResults';
import GuessInput from '../GuessInput/GuessInput';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import VisualKeyboard from '../VisualKeyboard/VisualKeyboard';

const answer = sample(WORDS);
console.log({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmittedGuess(pendingGuess) {
    const nextGuesses = [...guesses, pendingGuess];
    setGuesses(nextGuesses);

    if (pendingGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
      />
      <GuessInput
        handleSubmittedGuess={handleSubmittedGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
      <VisualKeyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
