import React from 'react';

import DarkMode from '../DarkMode/DarkMode';
import ModalTrigger from '../ModalTrigger/ModalTrigger';

function Header() {
  return (
    <header>
      <h1>Accessible React Word Game</h1>
      <div className="menu">
        <DarkMode />
        <ModalTrigger
          id="accessibility"
          label="Open accessibility modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              fill="currentColor"
              d="M23 14v-2H9v2h5v2.734l-3.868 6.77 1.736.992L15.58 18h.84l3.712 6.496 1.736-.992L18 16.734V14h5z"
            />
            <circle
              stroke="currentColor"
              fill="currentColor"
              cx="16"
              cy="9"
              r="2"
            />
            <path
              stroke="currentColor"
              fill="currentColor"
              d="M16 30a14 14 0 1 1 14-14 14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"
            />
          </svg>
          <small aria-hidden="true">A11y</small>
        </ModalTrigger>
        <ModalTrigger
          id="help"
          label="Open help modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              fill="currentColor"
              d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"
            />
            <circle
              stroke="currentColor"
              fill="currentColor"
              cx="16"
              cy="23.5"
              r="1.5"
            />
            <path
              stroke="currentColor"
              fill="currentColor"
              d="M17 8h-1.5a4.49 4.49 0 0 0-4.5 4.5v.5h2v-.5a2.5 2.5 0 0 1 2.5-2.5H17a2.5 2.5 0 0 1 0 5h-2v4.5h2V17a4.5 4.5 0 0 0 0-9Z"
            />
          </svg>
          <small aria-hidden="true">Help</small>
        </ModalTrigger>
      </div>
    </header>
  );
}

export default Header;
