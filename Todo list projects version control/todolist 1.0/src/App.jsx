import AppInput from "./components/AppInput";
import AppName from "./components/AppName";
import TodoItem2 from "./components/TodoItem2";
import TodoItem1 from "./components/TodoItem1";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AppInput></AppInput>
      <div class="TodoItems">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
