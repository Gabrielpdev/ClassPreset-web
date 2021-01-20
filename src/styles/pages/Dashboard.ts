import styled, { css } from 'styled-components';

interface buttonsProps  {
  layoutType: 'view' | 'generate' | 'edit' | 'delete';
}

const buttonTypeVariations = {
  view: css`
    background: #969EEB;
    border: 1px solid #444C98;
  `,
  generate: css`
    background: #7DD6BA ;
    border: 1px solid #00C689;
  `,
  edit: css`
    background: #FDC570;
    border: 1px solid #F9AC38;
  `,
  delete: css`
    background: #FFA49E;
    border: 1px solid #FB6158;
  `,
}

export const Container = styled.div`
  height: 100%;

  main{
    display: flex;
  }
`;

export const Title = styled.div`
  width: 100%;
  
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #042A4F;

  h2{ 
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  }
`;

export const NumberClasses = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  display: flex;
  align-items: center;


  color: #042A4F;
`;

export const ButtonAddClass = styled.button` 
  font-size: 20px;
  font-weight: bold;
  
  display: flex;
  justify-content: center;
  align-items: center;

  height: 25px;
  width: 25px;
  border: 0;
  border-radius: 50%;

  margin-left: 10px;

  background: #00C689;
  color: #fff;
`;

export const ContainerClasses = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const Class = styled.div`
  padding: 20px;
  background: #C7CCFF;
  border: 1px solid #849FB8;
  border-radius: 10px;
  width: 100%;
  margin: 8px;

  @media(min-width: 768px){
    max-width: 302px;
  }

  @media(min-width: 992px){
    max-width: 262px;
  }

  @media(min-width: 1200px){
    max-width: 322px;
  }
`;

export const ButtonsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 270px;

  margin-left: auto;
  margin-bottom: 10px;
  
  @media(min-width: 992px){
    max-width: 100%;
  }
  @media(min-width: 1200px){
    max-width: 272px;
  }
`;

export const Button = styled.button <buttonsProps>`
  padding: 4px 10px;
  border-radius: 20px;
  background: red;
  border: 1px solid green;

  font-family:'Paytone One';
  font-size: 9px;
  line-height: 13px;
  
  display: flex;
  align-items: center;
  text-align: center;

  ${(props) => buttonTypeVariations[props.layoutType || 'edit']}
  
`;

export const InfoClass = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  color: #444C98;
`;

export const ClassName = styled.span`

`;

export const ClassStudent = styled.span`

`;
