import { useContext } from "react";
import { todoitemcontext } from "../store/todo-item-store";
import TodoItem from "./TodoItem";

let Itemcontainer = () => {
  const { todoitems, deleteItem } = useContext(todoitemcontext);

  return (
    <>
      <div className="TodoItems">
        {todoitems.map((item, index) => (
          <TodoItem
            key={index}
            task={item.task}
            date={item.date}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default Itemcontainer;
