import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import Axios from "axios";

import Burger from "../../assets/burger.svg";

import H1 from "../../components/Title"
import Button from "../../components/Button"

import {
  Container,
  ContainerItems,
  Image,
  InputLabel,
  Input,
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  const inputOrder = useRef();
  const inputName = useRef();
  

  async function addNewOrder() {
    const { data: newOrder } = await Axios.post(
      `http://localhost:3001/orders`,
      {
        order: inputOrder.current.value,
        clientName: inputName.current.value,
      }
    );

    setOrders([...orders, newOrder]);

    history.push("/orders")
  }

  return (
    <Container>
      <Image alt="Code Burguer" src={Burger} />
      <ContainerItems>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />

        <InputLabel>Nome de Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

          <Button onClick={addNewOrder}>
            Novo pedido
          </Button>
      </ContainerItems>
    </Container>
  );
}

export default App;
