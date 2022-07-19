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

export const Order = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 29px;

  width: 342px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  margin-bottom: 18px;

  div {
    display: flex;
    flex-direction: column;
    height: 60%;

    text-align: start;
    padding-left: 27px;
  }

  .order {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;

    padding: 17px 0 20px 0;
  }

  .name {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;

    padding-bottom: 13px;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    margin-right: 15px;
  }
`;
