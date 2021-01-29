import styled from "styled-components";
// import Swiper  from 'react-id-swiper';

// export const SwiperStyled = styled(Swiper)`
//   display: flex;
// `;

export const Container = styled.div`
  /* width: 1000px; */
`;

export const NameClass = styled.div`
  /* font-family: Paytone One; */
  font-size: 24px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #FB6158;
`;

export const TitleTable = styled.div`
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #042A4F;
`;

export const CallsTable = styled.div`
  width: 100%;
  max-height: max-content;

  background: #E7E9FF;
  border: 1px solid #849FB8;
  box-sizing: border-box;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
  overflow: auto;
`;
export const CallsTableBody = styled.div`
  max-height: 60vh;
  
  font-size: 18px;
  line-height: 25px;

  text-align: center;
  color: #042A4F;

  width: 100%;
  margin: 10px 0 5px;
`;

export const NameCallsTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto 5px;

  span {
    width: 100%;
  }
`;

export const DataCallsTable = styled.div`
  margin: 0 auto 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #053563;

  span {
    width: 100%;
  }
`;
