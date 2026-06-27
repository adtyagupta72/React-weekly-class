import { useEffect, useState } from 'react';
import './home.css'
import ReusableButton from './ReusableButton'

const Home = () =>
{
    const [counter, setCounter] = useState(0)
    const [count, setCount] = useState(0)
    useEffect(() => 
    {
        setTimeout(() => 
        {
            //runs on every render
            console.log("Counter & Count dependancy effect!!")
        }, 1000);
    }, [counter, count]);

    // useEffect(() => {
    //     console.log("Count dependancy effect!")
    // }, [count])


    let divStyle = {
        color: "#ff99aa",
        backgroundColor: "#f1ff99"
    }

    function clickMe()
    {
        let message = prompt("Enter you message!")
        alert(message ? message : "User is angery, not inputted anything!")
    }

    function increment()
    {
        setCounter(counter+1)
    }
    function incrementCount()
    {
        setCount(count+1)
    }

    return <div className='homeDiv'>
        <h1 style={{color: "#ff22aa", }}>Home</h1>
        <div style={divStyle}>Here is an example of the styling applicaiton.</div>
        <br/>
        Counter: {counter}
        <button onClick={()=> increment()}>++</button>
        <br/>
        Count: {count}
        <button onClick={()=> incrementCount()}>++</button>
        <br/>
        <ReusableButton 
            message="You have clicked the button from Home!"
            onButtonClick = {clickMe}
        />
    </div>
}
export default Home