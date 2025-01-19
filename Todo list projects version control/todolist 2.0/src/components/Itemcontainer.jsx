import TodoItem from "./TodoItem";

let Itemcontainer = ({ todoitems }) => {
  let { task, date } = todoitems;
  return (
    <>
      <div className="TodoItems">
        {todoitems.map((item, index) => (
          <TodoItem key={index} task={item.task} date={item.date} />
        ))}
      </div>
    </>
  );
};

export default Itemcontainer;
