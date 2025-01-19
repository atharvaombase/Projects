function TodoItem({ task, date }) {
  return (
    <div className="container">
      <div className="row myrow">
        <div className="col-4">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger mybutton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
