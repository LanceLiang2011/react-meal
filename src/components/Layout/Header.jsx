import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        {children}
      </header>
      <div className={styles["main-image"]}>
        <img alt="nice meal" src={mealsImage} />
      </div>
    </>
  );
};

export default Header;
