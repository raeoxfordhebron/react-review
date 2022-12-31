import {useState} from "react"

function Counter(props){
    // let count = 0;
const [count, setCount] = useState(0)
console.log(count)

function countUp(){
  setCount(count)
  console.log(count)
}

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={countUp}>Add One</button>
    </div>
  );
}

export default Counter