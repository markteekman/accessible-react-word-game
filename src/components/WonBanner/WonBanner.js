import React from 'react';

import confetti from 'canvas-confetti';

import Banner from '../Banner/Banner';

function WonBanner({ numOfGuesses, handleRestart }) {
  React.useEffect(() => {
    if (
      !window.matchMedia ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <Banner
      status="happy"
      action={handleRestart}
      actionText="Restart game"
    >
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
