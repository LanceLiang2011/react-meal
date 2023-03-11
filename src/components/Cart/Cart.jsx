import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext } from "react";
import { CartListContext } from "../../contexts/CartListContext";
import CartItem from "./CartItem/CartItem";

export default function Cart({ onClose }) {
  const { items, addItem, removeItem } = useContext(CartListContext);
  const totalPrice = `$${items
    .reduce((acc, cur) => acc + cur.amount * cur.price, 0)
    .toFixed(2)}`;
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          onRemove={() => {
            removeItem(item.id);
          }}
          onAdd={() => {
            addItem({ ...item, amount: 1 });
          }}
          amount={item.amount}
          price={item.price}
          name={item.name}
          id={item.id}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={onClose} className={styles["button--alt"]}>
          Close
        </button>
        {!!items.length && (
          <button
            onClick={() => {
              alert(
                "Sorry, this is just a practice project. I can not send these delicious food to your house at this moment."
              );
            }}
            className={styles.button}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}
