import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import { CartListContext } from "../../contexts/CartListContext";

export default function HeaderCartButton({ onClick }) {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const { totalAmount, items } = useContext(CartListContext);

  const btnClasses = `${styles.button} ${btnHighlight && styles.bump}`;

  useEffect(() => {
    if (totalAmount === 0) return;
    setBtnHighlight(true);
    const timerId = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [totalAmount, items]);

  return (
    <button onClick={onClick} className={btnClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalAmount}</span>
    </button>
  );
}
