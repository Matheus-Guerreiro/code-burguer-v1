import styled from "styled-components";

export const Button = styled.button`
  
  display: flex;
  align-items: center;
  justify-content: center;


  width: 342px;
  height: 68px;

  margin-bottom: 20px;

  background: ${ props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : ' #d93856' };

  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  border-radius: 2px;
  border: none;
  text-decoration: none;


  color: #ffffff;

  cursor: pointer;

  &:hover{
    opacity: 0.9;
  }

  &:active{
    opacity: 0.8;
  }
`;