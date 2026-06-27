import './home.css'

const Home = () =>
{
    let divStyle = {
        color: "#ff99aa",
        backgroundColor: "#f1ff99"
    }
    function clickMe()
    {
        alert("You click the button! Bravo!")
    }
    return <div className='homeDiv'>
        <h1 style={{color: "#ff22aa", }}>Home</h1>
        <div style={divStyle}>Here is an example of the styling applicaiton.</div>
        <button onClick={()=> clickMe()}>Click Me</button>
    </div>
}
export default Home