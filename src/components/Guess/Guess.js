import React from 'react';

import 'animate.css';

import { range } from '../../utils';

function Cell({ letter, status, screenreader }) {
  const className = status ? `cell ${status}` : 'cell';
  const animate = status === 'correct' ? 'animate__flipInY' : '';
  const screenReader = screenreader ? screenreader : '';

  return (
    <span className={`${className} animate__animated ${animate}`}>
      {letter} <span className="visually-hidden">{screenReader}</span>{' '}
    </span>
  );
}

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={word ? word[num].letter : undefined}
          status={word ? word[num].status : undefined}
          screenreader={word ? word[num].screenreader : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
