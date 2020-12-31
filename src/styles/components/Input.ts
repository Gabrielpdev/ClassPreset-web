import styled, { css } from 'styled-components';

import Tooltip  from '../../components/ToolTip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 5px;
  background: #EDEDED;
  border-radius: 40px;
  border: 2px solid #EDEDED;
  padding: 10px 15px;
  color: #242424;

  align-items: center;
  display: flex;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #F24E45 ;
      font-size: 12px;
    `} 
  ${(props) =>
    props.isFocused &&
    css`
      color: #00C689;
      border-color: #00C689;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #242424;

    font-family: 'Paytone One';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;

    &::placeholder { 
      color: #949494;
    }
  }
  svg {
    margin-right: 16px;
    ${(props) => 
      props.isFilled && 
      css`
        color: #00C689;
    `}
    ${(props) => 
      props.isErrored &&
      css`
        color: #F9AC38;
    `}
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  width: 20px;
  margin-left: 16px;
  svg { 
    margin: 0;
  }
  span {
    background: #F24E45;
    color: #fff;
    &::before {
      border-color: #F24E45 transparent;
    }
  }
`;