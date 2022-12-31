import {useState} from "react"
import Button from "./Button"

function Counter(props){
    // let count = 0;
const [count, setCount] = useState(0)
console.log(count)

function countUp(){
  setCount(count+1)
  console.log(count)
}

  return (
    <div className="App">
      <h1>{count}</h1>
      <Button label="Add One" click={countUp}/>
    </div>
  );
}

export default Counter