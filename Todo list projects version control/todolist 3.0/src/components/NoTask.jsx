import { useContext } from "react";
import Styles from "./NoTask.module.css";
import { todoitemcontext } from "../store/todo-item-store";

function NoTask() {
  const { todoitems } = useContext(todoitemcontext);

  if (todoitems.length === 0) {
    return (
      <>
        <h1 className={Styles.NoTask}>All the work is done</h1>
      </>
    );
  } else {
    return;
  }
}

export default NoTask;
