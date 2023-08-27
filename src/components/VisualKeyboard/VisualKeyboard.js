import React from 'react';

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status, screenreader }) => {
      statusObj[letter] = { status, screenreader };
    });
  });

  return statusObj;
}

function VisualKeyboard({ validatedGuesses }) {
  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      <h2>Hints</h2>
      {ROWS.map((row, index) => (
        <div
          className="keyboard-row"
          key={index}
        >
          {row.map((letter) => (
            <kbd
              className={`letter ${statusByLetter[letter]?.status || ''}`}
              key={letter}
            >
              <span className="visually-hidden">{`${letter} ${
                statusByLetter[letter]?.screenreader ||
                'has not been used in the word'
              }`}</span>
              <span aria-hidden="true">{letter}</span>
            </kbd>
          ))}
        </div>
      ))}
    </div>
  );
}

export default VisualKeyboard;
