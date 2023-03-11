import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className={styles.backdrop}></div>;
};
const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div>{children}</div>
    </div>
  );
};

const overlayRoot = document.getElementById("overlays");

export default function Modal({ children, onClose }) {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, overlayRoot)}
      {createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        overlayRoot
      )}
    </>
  );
}
