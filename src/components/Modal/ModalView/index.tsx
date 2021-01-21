import { useRef } from 'react';
import Swiper from 'react-id-swiper';
import Modal from '../index'; 

import { Title, SubTitle, InputLink, CopyButton } from '../../../styles/components/ModalGenerate';

function ModalView({ isOpen, setIsOpen, classId }) {
  const params = {
    spaceBetween: 2,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  const linkRef = useRef(null);

  // function copyToClipboard(e) {
  //   linkRef.current.select();
  //   document.execCommand('copy');
  //   e.target.focus();
  //   alert('Link copiado!');
  // };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
      <Swiper {...params}>
        <div><h2>slider 1</h2></div>
        <div><h2>slider 2</h2></div>
      </Swiper>
    </Modal>
  );
}

export default ModalView;
