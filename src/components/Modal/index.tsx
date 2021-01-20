import { useEffect, useState } from 'react';

import { ModalStyle } from '../../styles/components/Modal';

function Modal({ children, isOpen, setIsOpen }) {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ModalStyle
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        overlay: {
          opacity: 0.45,
          backgroundColor: '#121214e6',
        },
      }}
    >
    {children}
  </ModalStyle>
  );
}

export default Modal;
