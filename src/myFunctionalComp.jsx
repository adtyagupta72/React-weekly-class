import { useState } from "react"

var MyFunctionalComp = () => 
{
    const [count, setCount] = useState(0)
    function incrementCount()
    {
        console.log("incrementCount clicked! ")
        //count++
        setCount(count+1)
    }
    return <div>
        <h1>This is my Functional Component!</h1>
        <br></br>
        <label>Count is: {count}</label><br/>
        <button onClick={()=>incrementCount()}>Increment Count</button>
    </div>
}
export default MyFunctionalComp