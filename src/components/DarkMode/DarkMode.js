import React from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = React.useState(null);

  React.useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      enableDarkMode(false);
    } else if (savedMode === 'disabled') {
      disableDarkMode(false);
    } else {
      checkPreference();
    }
  });

  const enableDarkMode = (store = true) => {
    document.body.classList.add('dark');
    setDarkMode(true);
    if (store) localStorage.setItem('darkMode', 'enabled');
  };

  const disableDarkMode = (store = true) => {
    document.body.classList.remove('dark');
    setDarkMode(false);
    if (store) localStorage.setItem('darkMode', 'disabled');
  };

  const checkPreference = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode(false);
    } else {
      disableDarkMode(false);
    }
  };

  const toggleDarkMode = () => {
    if (darkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  return (
    <button
      className={`darkmode-toggle ${darkMode ? 'enabled' : 'disabled'}`}
      aria-pressed={darkMode}
      aria-label={darkMode ? 'Disable dark mode' : 'Enable dark mode'}
      onClick={toggleDarkMode}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {darkMode ? (
          <path
            fill="currentColor"
            d="M12.857 0h-1.714v4.286h1.714V0ZM19.88 2.909l-3.006 3.005 1.212 1.212 3.005-3.005-1.212-1.212ZM24 11.143h-4.286v1.714H24v-1.714ZM18.086 16.874l-1.212 1.212 3.005 3.005 1.212-1.212-3.005-3.005ZM12.857 19.714h-1.714V24h1.714v-4.286ZM5.914 16.874 2.909 19.88l1.212 1.212 3.005-3.005-1.212-1.212ZM4.286 11.143H0v1.714h4.286v-1.714ZM4.12 2.909 2.91 4.12l3.005 3.005 1.212-1.212L4.12 2.909ZM12 8.571a3.429 3.429 0 1 1 0 6.858 3.429 3.429 0 0 1 0-6.858Zm0-1.714a5.143 5.143 0 1 0 0 10.286 5.143 5.143 0 0 0 0-10.286Z"
          />
        ) : (
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"
          />
        )}
      </svg>
      <small aria-hidden="true">{darkMode ? 'Light' : 'Dark'}</small>
    </button>
  );
}

export default DarkMode;
