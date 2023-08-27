import React from 'react';

import Modal from '../Modal/Modal';

function HelpModal() {
  return (
    <Modal id="help">
      <h2>How to Play</h2>
      <p>
        The objective of this game is to guess a randomly selected FIVE
        (5)-letter word. You have a maximum of SIX (6) attempts to guess it
        correctly. Along the way, the game assists you by indicating if a letter
        is in the correct position or not. There are three possibilities:
      </p>
      <ul>
        <li>
          <strong>Correct</strong>: The letter is in the right position and
          highlighted with a green background.
        </li>
        <li>
          <strong>Incorrect</strong>: The letter is not in the word and
          displayed with a grey background.
        </li>
        <li>
          <strong>Misplaced</strong>: The letter is in the word but in the wrong
          position, marked with a yellow background.
        </li>
      </ul>
      <img
        src="game-example.png"
        alt="Game Example"
      />
      <p>
        Tip: There's also a hints section at the bottom—a keyboard displays all
        the letters you've used so far, along with their corresponding statuses.
      </p>
    </Modal>
  );
}

export default HelpModal;
