import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

export default function MealItemForm({ amount, setAmount, handleAdd }) {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        id="amount"
        type="number"
        min={1}
        max={5}
        step={1}
        value={amount || ""}
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <button onClick={handleAdd}>+ Add</button>
    </form>
  );
}
