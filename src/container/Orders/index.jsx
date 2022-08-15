import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Axios from "axios";

import Bag from "../../assets/bag.svg";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/Title"
import Button from "../../components/Button"

import { Container, ContainerItems, Image, Order } from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const history = useHistory()

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await Axios.get("https://back-burguer.netlify.app/orders" );

      setOrders(newOrders);
    }

    fetchOrders();
  }, []);

  function backPage () {
    history.push("/")
  }


  async function deleteOrder (orderId) {
    await Axios.delete(`https://back-burguer.netlify.app/orders/${orderId}`);

    const newOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newOrders)
  }

  

  return (
    <Container>
      <Image alt="Code Burguer" src={Bag} />
      <ContainerItems>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <div>
                <p className="order">{order.order}</p> <p className="name">{order.clientName}</p>
              </div>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt="Trash" />
              </button>
            </Order>
          ))}
        </ul>

        <Button isBack={true} onClick={backPage}>Voltar</Button>
      </ContainerItems>
    </Container>
  );
}

export default App;
