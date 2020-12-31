import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;

    padding: 0 15px;
  }

`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FF785B;
`;

export const User = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;

  margin: 20px 0;

  color: #042A4F;
`;

export const Description = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #042A4F;
`;