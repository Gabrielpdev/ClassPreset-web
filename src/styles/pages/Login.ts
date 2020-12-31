import styled from 'styled-components';
import { Form as formulario } from '@unform/web';

interface IChoiceButton {
  isSelected: boolean;
}

export const Title = styled.h2`
  color: #FF785B;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;

  @media(min-width: 768px){
    font-size: 48px;
  }
  
  @media(min-width: 992px){
    font-size: 58px;
  }
  @media(min-width: 1400px){
    font-size: 78px;
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
    background: #2A327D;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    @media(min-width: 992px){
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  background: white;
  
  position: relative;
  height: 352px;

  @media(min-width: 992px){
    width: 100%;
    height: 100%;
  }
`;

export const Logo = styled.div`
  width: 226px;

  @media(min-width: 768px){
    width: 380px;
  }

  @media(min-width: 992px){
    width: 550px;
  }
  @media(min-width: 1400px){
    width: 750px;
  }
`;

export const BottomLeftMobile = styled.div`
  position: absolute;
  bottom : -5px;
  left: 0;
`;

export const BottomRightMobile = styled.div`
  position: absolute;
  bottom: -7px;
  right: 0;

  @media(min-width: 992px){
    display: none;
  }
`;

export const TopLeftMobile = styled.div`
  position: absolute;
  top: -3px;
  left: 0;
`;

export const TopRightMobile = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  @media(min-width: 992px){
    display: none;
  }
`;


export const BottomRight = styled.div`
  display:none;

  @media(min-width: 992px){
    display: block;
    position: absolute;
    bottom: -7px;
    right: 0;
  }
`;

export const TopRight = styled.div`
  display:none;

  @media(min-width: 992px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }
`; 

export const Form = styled(formulario)`
  padding: 20px;

  @media(min-width: 992px){
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FormTitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  color: #FF785B;
`;

export const FormOptions = styled.div`
  border-radius: 40px;
  border: 2px solid #F9AC38;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FormOptionsButton = styled.button<IChoiceButton>`
  border: 0;
  background: #F9AC38;
  color: #242424;
  background: ${(props) => props.isSelected ? '#F9AC38' : 'transparent'};
  color: ${(props) => props.isSelected ? '#242424' : '#fff'};
  transition: all 0.3s ease;

  padding: 5px 10px;
  border-radius: 40px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  display: flex;
  align-items: center;
  justify-content:center;

  width: 100%;
  font-family: "Paytone One";

  &:hover{
    background: ${(props) => props.isSelected ? '#F9BB5F' : '#4F58AB'};
  }
`;

export const FormIdentityField = styled.div`
  margin-top: 10px;
  color: #fff;
`;

export const FormIdentityFieldTitle = styled.span`
  &:not(:first-child){
    margin-top: 5px;
  }
  
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 34px;
  display: flex;
  align-items: center;
`;

export const FormIdentityFieldButton = styled.button`
  margin-top: 40px;
  border-radius: 40px;
  padding: 12px 30px;
  background: #00C689;
  width: 100%;
  border: 0;
  transition: all 0.3s ease;

  font-family: "Paytone One";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  color: #EDEDED;

  &:hover{
    background: #00B289;
  }
`;