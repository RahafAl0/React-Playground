import { useState } from "react";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    setValueToAdd(value)
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  }

  return (
    <div>
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <button
          className="bg-indigo-500 flex items-center px-3 py-1.5 border rounded-full"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-indigo-500 flex items-center px-3 py-1.5 border rounded-full"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <button>Add it</button>
      </form>
    </div>
  );
}

export default CounterPage;
