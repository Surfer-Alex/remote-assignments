function Counter({ value, onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement}>+1</button>
      <span>{value}</span>
    </div>
  );
}

export default Counter;
