import React from 'react';

function ModalTrigger({ id, children, label }) {
  const handleModal = (event) => {
    event.stopPropagation();
    const correspondingModal = document.getElementById(id);
    if (correspondingModal) {
      correspondingModal.showModal();
    }
  };

  return (
    <button
      onClick={handleModal}
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default ModalTrigger;
