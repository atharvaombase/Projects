import styles from "./Button.module.css";
let Button = ({ onButtonClicked }) => {
  const calculatorButtons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "C",
    "/",
    "*",
    "-",
    "+",
    "=",
  ];

  return (
    <div class={styles.buttonContainer}>
      {calculatorButtons.map((b, index) => {
        return (
          <button
            key={index}
            class={styles.button}
            onClick={() => onButtonClicked(b)}
          >
            {b}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
