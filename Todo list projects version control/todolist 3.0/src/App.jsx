import AppInput from "./components/AppInput";
import AppName from "./components/AppName";
import "./App.css";
import Itemcontainer from "./components/Itemcontainer";
import NoTask from "./components/NoTask";
import { useState } from "react";
import { todoitemcontext } from "./store/todo-item-store";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const Initialtodolist = [
    {
      task: "Buy milk",
      date: "4/77/8888",
    },
    {
      task: "Drink milk",
      date: "4/77/8888",
    },
  ];
  const [todolist, settodolist] = useState(Initialtodolist);

  const addNewItem = (itemName, date) => {
    console.log(`Entered item is ${itemName} and due date is ${date}`);
    let newList = [...todolist, { task: itemName, date: date }];
    settodolist(newList);
  };

  const deleteItem = (tasks, dates) => {
    console.log("delete Item");
    const updatedlist = todolist.filter(
      (todo) => !(todo.task === tasks && todo.date === dates)
    );
    settodolist(updatedlist);
  };
  // const defaultvalues = [{ task: "something", date: "12-3-2333" }];
  return (
    <todoitemcontext.Provider
      value={{
        todoitems: todolist,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AppInput></AppInput>
        <NoTask></NoTask>
        <Itemcontainer />
      </center>
    </todoitemcontext.Provider>
  );
}

export default App;
