let CurrentTime = () => {
  let now = new Date();
  return (
    <div>
      <p class="Time">
        This is the current time:{now.toLocaleDateString()} -{" "}
        {now.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default CurrentTime;
