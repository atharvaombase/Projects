function TodoItem1() {
  let task = "Buy milk";
  let date = "12/03/2024";

  return (
    <div class="container">
      <div class="row myrow">
        <div class="col-4">
          <p>{task}</p>
        </div>
        <div class="col-4">
          <p>{date}</p>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger mybutton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
