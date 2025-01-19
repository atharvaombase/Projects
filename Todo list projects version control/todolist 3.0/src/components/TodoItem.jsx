import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { todoitemcontext } from "../store/todo-item-store";

function TodoItem({ task, date }) {
  const { todoitems, deleteItem } = useContext(todoitemcontext);
  return (
    <div className="container">
      <div className="row myrow">
        <div className="col-4">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger mybutton"
            onClick={() => {
              deleteItem(task, date);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
