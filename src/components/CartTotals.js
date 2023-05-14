import React, {useState} from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import ModalBuy from "./ModalBuy";
import {Button} from "antd"

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();

  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };
  
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Промежуточный итог : <span>{total_amount}KGZ</span>
          </h5>
          <p>
            Стоимость доставки : <span>{shipping_fee}KGZ</span>
          </p>
          <hr />
          <h4>
            Весь заказ :{" "}
            <span>{total_amount + shipping_fee}KGZ</span>
          </h4>
        </article>
        <div>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            className="btn-buy btn"
          >
            Купить
          </Button>
          <ModalBuy
            open={open}
            onCreate={onCreate}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
