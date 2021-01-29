import { createRef } from 'react';
import { SwiperOptions } from 'swiper';
import Swiper from 'react-id-swiper';
import Modal from '../index'; 

import CustomSwiperPagination from './custom-swiper-pagination';

import { 
  Container,
  NameClass,
  TitleTable,
  CallsTable,
  CallsTableBody,
  NameCallsTable,
  DataCallsTable,
 } from '../../../styles/components/ModalView';

function ModalView({ isOpen, setIsOpen, classId }) {
  const params : SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 20
  }
  
  const swiperRef = createRef();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
      <NameClass>Nome da turma</NameClass>
      <Swiper {...params} ref={swiperRef}>
        <Container>
          <TitleTable>Chamadas</TitleTable>
          <CallsTable>
            <CallsTableBody>
              <NameCallsTable>
                <span>Nome</span>
                <span>Dia</span>
              </NameCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
              <DataCallsTable>
                <span>Chamada 1</span>
                <span>02/03/2021</span>
              </DataCallsTable>
            </CallsTableBody>
          </CallsTable>
        </Container>

        <Container>
          <TitleTable>Presença</TitleTable>
          <CallsTable>
            <CallsTableBody>
              <NameCallsTable>
                <span>Nome</span>
                <span>Status</span>
              </NameCallsTable>
              <DataCallsTable>
                <span>Gabriel Pereira Oliveira</span>
                <span>Presente</span>
              </DataCallsTable>
            </CallsTableBody>
          </CallsTable>
        </Container>
      </Swiper>

      <CustomSwiperPagination swiperRef={swiperRef} />
    </Modal>
  );
}

export default ModalView;
