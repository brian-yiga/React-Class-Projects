// import React from 'react';
// import { useState } from 'react';

// const CounterApp = () => {
//   let [count, setCount] = useState(0);
//   let increaseCount = () => {
//     setCount(++count)
//   }
//   let decreaseCount = () => {
//     let newCount = count - 1;
//     if (newCount < 0) {
//       count = 0
//     } else {
//       count = newCount
//     }
//     setCount(--count)
//   }
//   return (
//     <div>
//       <h1>Simple Counter</h1>
//       <h3>A Simple Tool for counting things and keeping track of Numbers</h3>
//       <h2>{count}</h2>
//       <button onClick={increaseCount}>Increment</button>
//       <button onClick={decreaseCount}>Decrement</button>
//     </div>


//   )
// }

// export default CounterApp

//REFACTORED CODE

import React from 'react'
import { useState } from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0)); // Prevent count from going below 0
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <h3>A Simple Tool for counting things and keeping track of Numbers</h3>
      <div className="counterContainer">
      <button onClick={increaseCount}>Increment</button>
      <h2>{count}</h2>
      <button onClick={decreaseCount}>Decrement</button>
      </div>
    </div>
  )
}

export default CounterApp