import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/display";
import Button from "./components/Button";
function App() {
  return (
    <div class={styles.calculator}>
      <Display></Display>
      <Button></Button>
    </div>
  );
}

export default App;
