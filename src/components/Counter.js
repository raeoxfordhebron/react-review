import {useState} from "react"
import Button from "./Button"
import Display from "./Display"

function Counter(props){
    console.log("Counter Rendered")
    // let count = 0;
const [count, setCount] = useState(0)
console.log(count)

function countUp(){
  setCount(count+1)
}

function countDown(){
    setCount(count-1)
}

  return (
    <div className="App">
      <Display displayValue={count}/>
      <Button label="Add One" click={countUp} bg="green"/>
      <Button label="Subtract One" click={countDown} bg="red"/>
    </div>
  );
}

export default Counter