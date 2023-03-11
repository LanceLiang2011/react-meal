import { useState, useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { CartListContext } from "../../../contexts/CartListContext";

export default function MealItem({ id, name, description, price }) {
  const formatPrice = `$${price.toFixed(2)}`;
  const [amount, setAmount] = useState(0);
  const { addItem } = useContext(CartListContext);
  const handleAdd = (event) => {
    event.preventDefault();
    // console.log({ id, name, price, amount });
    addItem({ id, name, price, amount: Number(amount) });
    setAmount(0);
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatPrice}</div>
      </div>
      <div>
        <MealItemForm
          amount={amount}
          setAmount={setAmount}
          handleAdd={handleAdd}
        />
      </div>
    </li>
  );
}
