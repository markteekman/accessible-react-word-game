import React from 'react';

function Modal({ id, children }) {
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const dialog = document.getElementById(id);
      const rect = dialog.getBoundingClientRect();

      if (
        rect.left > event.clientX ||
        rect.right < event.clientX ||
        rect.top > event.clientY ||
        rect.bottom < event.clientY
      ) {
        dialog.close();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [id]);

  return (
    <dialog id={id}>
      {children}
      <form method="dialog">
        <button>
          Close <span className="visually-hidden">{id}</span> modal
        </button>
      </form>
    </dialog>
  );
}

export default Modal;
