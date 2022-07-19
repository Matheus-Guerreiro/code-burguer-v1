import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #151521;

  height: 100%;
  min-height: 100vh;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  padding: 25px 30px;
`;

export const Image = styled.img`
  margin-top: 15px;
`;

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  display: flex;
  align-items: center;

  padding-left: 15px;

  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  padding-left: 15px;
  margin-bottom: 42px;

  color: #ffffff;
`;

