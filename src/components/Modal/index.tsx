import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

import { ModalStyle, CloseModal } from '../../styles/components/Modal';

function Modal({ children, isOpen, setIsOpen }) {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ModalStyle
      shouldCloseOnOverlayClick={true}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={true}
      style={{
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
    <CloseModal type='button' onClick={setIsOpen}>
      <FiX size={20} />
    </CloseModal>
    {children}
  </ModalStyle>
  );
}

export default Modal;
