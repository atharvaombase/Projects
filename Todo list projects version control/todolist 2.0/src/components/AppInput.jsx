function AppInput() {
  let TaskName = "";
  let TaskDate = "";
  return (
    <div className="container">
      <div className="row myrow">
        <div className="col-4">
          <input type="text" placeholder="Enter new task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" id="b1" className="btn btn-primary mybutton">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppInput;
