import React from 'react';

function Banner({ status, action, actionText, children }) {
  const bannerRef = React.useRef(null);

  React.useEffect(() => {
    bannerRef.current.focus();
  }, []);

  return (
    <div
      className={`${status} banner`}
      ref={bannerRef}
      tabIndex={-1}
    >
      {children}
      {action && <button onClick={action}>{actionText}</button>}
    </div>
  );
}

export default Banner;
