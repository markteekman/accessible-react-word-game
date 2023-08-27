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

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);
  const [restartOccurred, setRestartOccurred] = React.useState(false);

  console.log({ answer });

  function handleSubmittedGuess(pendingGuess) {
    const nextGuesses = [...guesses, pendingGuess];
    setGuesses(nextGuesses);

    if (pendingGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
    setRestartOccurred(true);
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults
        validatedGuesses={validatedGuesses}
        answer={answer}
      />
      <GuessInput
        handleSubmittedGuess={handleSubmittedGuess}
        gameStatus={gameStatus}
        restartOccurred={restartOccurred}
      />
      {gameStatus === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner
          answer={answer}
          handleRestart={handleRestart}
        />
      )}
      <VisualKeyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
