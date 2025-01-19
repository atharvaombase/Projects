import "./App.css";
import CurrentTime from "./components/CurrentTime";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";

function App() {
  return (
    <div class="Main-container">
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </div>
  );
}

export default App;
