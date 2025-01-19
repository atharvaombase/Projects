import AppInput from "./components/AppInput";
import AppName from "./components/AppName";
import "./App.css";
import Itemcontainer from "./components/itemcontainer";
function App() {
  const todolist = [
    {
      task: "Buy milk",
      date: "4/77/8888",
    },
    {
      task: "Drink milk",
      date: "4/77/8888",
    },
    {
      task: "Go for a walk",
      date: "4/78/8888",
    },
    {
      task: "Read a book",
      date: "4/79/8888",
    },
    {
      task: "Prepare dinner",
      date: "4/80/8888",
    },
    {
      task: "Call a friend",
      date: "4/81/8888",
    },
    {
      task: "Finish homework",
      date: "4/82/8888",
    },
    {
      task: "Organize workspace",
      date: "4/83/8888",
    },
    {
      task: "Go grocery shopping",
      date: "4/84/8888",
    },
    {
      task: "Practice coding",
      date: "4/85/8888",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppInput></AppInput>
      <Itemcontainer todoitems={todolist} />
    </center>
  );
}

export default App;
