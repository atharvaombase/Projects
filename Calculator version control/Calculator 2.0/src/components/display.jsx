import styles from "./display.module.css";

let Display = ({ num }) => {
  return <input class={styles.display} type="text" value={num} readOnly />;
};

export default Display;
