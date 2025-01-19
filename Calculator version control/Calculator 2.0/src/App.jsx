import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/display";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [num, setnum] = useState("");
  const press = (nums, event) => {
    if (nums === "C") {
      setnum("");
    } else if (nums === "=") {
      const result = eval(num);
      setnum(result);
    } else {
      const newValue = num + nums;
      setnum(newValue);
    }
  };
  return (
    <div class={styles.calculator}>
      <Display num={num}></Display>
      <Button onButtonClicked={press}></Button>
    </div>
  );
}

export default App;
