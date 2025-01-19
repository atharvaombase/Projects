function AppInput() {
  let TaskName = "";
  let TaskDate = "";
  return (
    <div class="container">
      <div class="row myrow">
        <div class="col-4">
          <input type="text" placeholder="Enter new task" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" id="b1" class="btn btn-primary mybutton">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppInput;
