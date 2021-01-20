import ReactModal from 'react-modal';
import styled from 'styled-components';

export const ModalStyle = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;

  padding: 20px; 
  transform: translate(-50%, -50%);

  background: #F0F0F5;
  color: #000000;
  border-radius: 8px;
  
  width: 80%;
  border: 0;

  display: flex;
  flex-direction: column;
`;