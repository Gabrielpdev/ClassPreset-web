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
    height: 100%;
    width: 100%;

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
  overflow: hidden;
  
  position: relative;
  height: 50px;

  @media(min-width: 360px){
    height: 210px;
  }

  @media(min-width: 768px){
    height: 352px;
  }

  @media(min-width: 992px){
    width: 100%;
    height: 100%;
  }
`;

export const Logo = styled.div`
  width: 226px;
  display:none;

  @media(min-width: 360px){
    display:none;
  }

  @media(min-width: 768px){
    display:block;
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
  display:none;

  @media(min-width: 360px){
    display:block;
    height: 118px;
    left: -10px;
  }

  @media(min-width: 768px){
    height: unset;
    left: 0;
  }
`;

export const BottomRightMobile = styled.div`
  position: absolute;
  bottom: -7px;
  right: 0;
  display:none;

  @media(min-width: 360px){
    display:block;
    height: 118px;
  }
  @media(min-width: 768px){
    height: unset;
  }

  @media(min-width: 992px){
    display: none;
  }
`;

export const TopLeftMobile = styled.div`
  position: absolute;
  top: -3px;
  left: 0;
  display:none;

  @media(min-width: 360px){
    display:block;
  }
`;

export const TopRightMobile = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display:none;

  @media(min-width: 360px){
    display:block;
  }

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
  background: #2A327D;

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

  position: relative;


  &.registration:after{
    left: 0;
  }

  &.cpf:after{
    left: calc(100% / 3);
  }

  &.cellphone:after{
    left: calc((100% / 3) * 2);
  }

  &:after{
    transition: all 0.3s ease;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #F9AC38;
    border-radius: 40px;
    width: calc(100% / 3);
    height: 100%;
    z-index: 0;
  }
`;

export const FormOptionsButton = styled.button<IChoiceButton>`
  border: 0;
  background: transparent;
  color: #242424;
  /* background: ${(props) => props.isSelected ? '#F9AC38' : 'transparent'}; */
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
  z-index: 1;

  width: 100%;
  font-family: "Paytone One";

  /* &:hover{
    background: ${(props) => props.isSelected ? '#F9BB5F' : '#4F58AB'};
  } */
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

export const Loading = styled.div`
  position:relative;
  top:51%;
  left:50%;
  transform:translate(-50%, -50%); 

  .circle{
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #00C689;
    border-radius: 50%;
    animation: loading 1.5s cubic-bezier(.8, .5, .2, 1.4) infinite;
    transform-origin: bottom center;
    position: relative;
    margin-right: 3px;
  }
  @keyframes loading{
    0%{
      transform: translateY(0px);
      background-color: #00C689;
    }
    50%{
      transform: translateY(10px);
      background-color: #fff;
    }
    100%{
      transform: translateY(0px);
      background-color: #00C689;
    }
  }
  .circle-1{
    animation-delay: 0.1s;
  }
  .circle-2{
    animation-delay: 0.2s;
  }
  .circle-3{
    animation-delay: 0.3s;
  }
  .circle-4{
    animation-delay: 0.4s;
  }
  .circle-5{
    animation-delay: 0.5s;
  }
  .circle-6{
    animation-delay: 0.6s;
  }
  .circle-7{
    animation-delay: 0.7s;
  }
  .circle-8{
    animation-delay: 0.8s;
  }
`;