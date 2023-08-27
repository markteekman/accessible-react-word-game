import React from 'react';

import Modal from '../Modal/Modal';

function HelpModal() {
  return (
    <Modal id="accessibility">
      <h2>Enhancing Accessibility</h2>
      <p>
        This game is designed to provide an accessible experience for everyone.
        We've implemented the following enhancements to achieve this goal:
      </p>
      <ul>
        <li>
          Added a second visual indicator for letters in the correct position
          (straight underline) and the wrong position (wavy underline) to assist
          visually impaired users.
        </li>
        <li>
          Improved custom focus outline indicators beyond the browser's default
          styling.
        </li>
        <li>
          Utilized semantic HTML structure, including landmarks such as{' '}
          <code>header</code>, <code>main</code> and <code>footer</code>, along
          with <code>ul</code> and <code>li</code> for guesses,{' '}
          <code>button</code> for interactive elements, <code>label</code> for
          input, and <code>dialog</code> for modals.
        </li>
        <li>
          Incorporated <code>aria-live</code> and <code>aria-atomic</code>{' '}
          attributes on the game's guesses. After submitting a guess, screen
          reader software will read out the results and letter statuses.
        </li>
        <li>
          Ensured proper announcement to screen readers when the game is won or
          lost.
        </li>
        <li>
          Focused attention just before the 'Restart Game' button when the game
          is won or lost.
        </li>
        <li>
          After pressing the 'Restart Game' button, the focus shifts to the
          input field.
        </li>
        <li>
          Implemented a dark mode that aligns with the user's{' '}
          <code>preferes-color-scheme</code>.
        </li>
        <li>
          Disabled confetti and correct letter animations if users have set{' '}
          <code>prefers-reduced-motion</code> to true in their OS settings.
        </li>
      </ul>
    </Modal>
  );
}

export default HelpModal;
