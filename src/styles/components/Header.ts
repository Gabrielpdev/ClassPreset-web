import styled from 'styled-components';

export const Head = styled.div`
  background: #2A327D;
  height: 65px;
  width: 100%;
  display: flex;

  >div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  color: #fff;

  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 34px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const IconContainer = styled.button`
  border: 0;
  border-radius: 50%;
  padding: 10px;
  color: #000;
  background: #F9AC38

`;