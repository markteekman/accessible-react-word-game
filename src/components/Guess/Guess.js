import React from 'react';

import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({ word, answer }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={word ? word[num].letter : undefined}
          status={word ? word[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
