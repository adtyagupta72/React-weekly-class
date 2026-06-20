import './home.css'

const Home = () =>
{
    let divStyle = {
        color: "#ff99aa",
        backgroundColor: "#f1ff99"
    }
    return <div className='homeDiv'>
        <h1 style={{color: "#ff22aa", }}>Home</h1>
        <div style={divStyle}>Here is an example of the styling applicaiton.</div>
    </div>
}
export default Home