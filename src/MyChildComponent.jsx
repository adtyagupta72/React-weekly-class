import { useState } from "react"
import MyComponent from "./MyComponent"

const MyChildComponent = (props) =>
{
    const [childCounter, setChildCounter] = useState(0)

    console.log("props from MyChildComponent: ", props)
    function incrementChildCounter()
    {
        setChildCounter(childCounter+1)
    }

    return <div>
        <h2>This is my Child component</h2>
        <br/>
        <label>Parent Counter: {props.counter}</label>
        <br/>
        <button onClick={()=> incrementChildCounter()}>Increment Child Counter</button>
        <br/>
        <button onClick={()=> props.getChildData(childCounter)}>Send to Parent</button>
    </div>
}
export default MyChildComponent