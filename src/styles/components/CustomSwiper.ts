import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .should-have-opacity {
    display: none;
  }

  button {
    background: transparent;
    border: none;
    line-height: 0;
    color: transparent;
    width: 28px;
    height: 28px;
    color: #2A327D;
    mask-size: contain;
    padding: 0;

    &:first-child {
      margin-right: 4px;
    }

    &:last-child {
      margin-left: -5px;
    }
  }

  div {
    color: #2A327D;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    flex: 1;

    span {
      height: 0;
      display: flex;
      border: 1px solid #2A327D;
      border-radius: 10px;

      &:not(:last-child) {
        flex: 1;
        margin-left: 10px;
      }

      &:last-child {
        width: 3px;
        margin: 0 2px;
      }
    }
  }
`;
