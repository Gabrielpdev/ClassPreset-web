import ReactModal from 'react-modal';
import styled from 'styled-components';


export const ModalStyle = styled(ReactModal)`
  position: relative;
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
  max-height: 85vh;
  border: 0;

  display: flex;
  flex-direction: column;
  outline: none;

  .swiper-container{
    display: flex;
    overflow-x: hidden;
    height: max-content;
  }
  .swiper-wrapper {
    display:flex;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  right: -10px;
  top: -10px;
  border:0;
  padding: 3px;
  border-radius: 50%;
  background: #00C689;
  color: #fff;
  z-index: 1;
`;
