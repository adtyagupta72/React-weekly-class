import './home.css'
import ReusableButton from './ReusableButton'

const Home = () =>
{
    let divStyle = {
        color: "#ff99aa",
        backgroundColor: "#f1ff99"
    }

    function clickMe()
    {
        let message = prompt("Enter you message!")
        alert(message ? message : "User is angery, not inputted anything!")
    }

    return <div className='homeDiv'>
        <h1 style={{color: "#ff22aa", }}>Home</h1>
        <div style={divStyle}>Here is an example of the styling applicaiton.</div>
        <ReusableButton 
            message="You have clicked the button from Home!"
            onButtonClick = {clickMe}
        />
    </div>
}
export default Home