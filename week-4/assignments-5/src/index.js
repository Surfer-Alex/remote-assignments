import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

function Counter({ value, onIncrement }) {
    
    return (
      <div>
        <button onClick={onIncrement}>+1</button>
        <span>{value}</span>
      </div>
    );
  }
  
  function App() {
    const [counters, setCounters] = useState([0, 0, 0]);
    
    // 檢查問題
    useEffect(() => {    
        console.log('counters 變化了', counters);
    }, [counters]);
   
    const incrementAll = () => {
      setCounters(counters.map(count => count + 1));
    };
     //新增計數器展開原計數器陣列加入一個初始值為0的value
    const addCounter = () => {
      setCounters([...counters, 0]);
    };
    //呼叫<Counter />並透過map()根據counters陣列的長度決定要渲染多少次<Counter />
    return (
      <div>
        <button onClick={incrementAll}>All + 1</button>
        {counters.map((count, index) => (
          <Counter key={index} value={count} onIncrement={() => {
            setCounters(prevCounters => {
              const newCounters = [...prevCounters];
              newCounters[index] += 1;
              return newCounters;
            });
          }} />
        ))}
        <button onClick={addCounter}>Add Counter</button>
      </div>
    );
  }


ReactDOM.render(<App />, document.getElementById("here"));