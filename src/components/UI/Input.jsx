import styles from "./Input.module.css";
import { useId } from "react";

export default function Input({ label, ...rest }) {
  const compId = useId();
  return (
    <div className={styles.input}>
      <label htmlFor={`${compId}input.id`}>{label}</label>
      <input {...rest} id={`${compId}input.id`} />
    </div>
  );
}
