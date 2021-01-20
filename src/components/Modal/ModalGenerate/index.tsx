import { useRef } from 'react';
import Modal from '../index'; 

import { Title, SubTitle, InputLink, CopyButton } from '../../../styles/components/ModalGenerate';

function ModalGenerate({ isOpen, setIsOpen, generatedLink }) {
  const linkRef = useRef(null);

  function copyToClipboard(e) {
    linkRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    alert('Link copiado!');
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
      <Title>
        Link da turma - {' '}
        <SubTitle>EBEP 2020</SubTitle>
      </Title>
      <InputLink read-only ref={linkRef} defaultValue={generatedLink} />
      <CopyButton type='button' onClick={copyToClipboard} >Copiar link</CopyButton>
    </Modal>
  );
}

export default ModalGenerate;
