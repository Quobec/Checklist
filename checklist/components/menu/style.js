import styled from 'styled-components';

export const Menu = styled.div`
  display: inline-flex;
  width: 20%;
  height: 100vh;
  background-color: #e3e3e3;
  flex-direction: column;
`;

export const Add = styled.div`
  margin: 5%;
  width: 90%;
  height: 100px;
  background-color: #51b3f5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 30px;
  &:hover{
    background-color: #73c7ff;
    box-shadow: 0 0 5px 3px #555;
  }
`;

export const Selector = styled.div`
  width: 100%;
  height: 100px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 30px;
  &:hover{
    box-shadow: inset 0 0 4px 2px gray;
  }
`;