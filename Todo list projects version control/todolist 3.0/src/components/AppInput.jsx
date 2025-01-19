import { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { todoitemcontext } from "../store/todo-item-store";
function AppInput() {
  const [item, setItem] = useState();
  const [date, setDate] = useState();
  const { addNewItem } = useContext(todoitemcontext);

  const handleItemChange = (event) => {
    // console.log(event);
    setItem(event.target.value);
  };
  const handleDateChange = (event) => {
    // console.log(event);
    setDate(event.target.value);
  };
  const handleAddButtonCLicked = () => {
    document.querySelector("#task").value = "";
    document.querySelector("#date").value = "";
    addNewItem(item, date);
  };

  return (
    <div className="container">
      <div className="row myrow">
        <div className="col-4">
          <input
            id="task"
            type="text"
            placeholder="Enter new task"
            onChange={handleItemChange}
          />
        </div>
        <div className="col-4">
          <input type="date" id="date" onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            id="b1"
            className="btn btn-primary mybutton"
            onClick={handleAddButtonCLicked}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppInput;
