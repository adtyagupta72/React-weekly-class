const ReusableButton = () =>
{
    function clickMe()
    {
        alert("You click the button! Bravo!")
    }
    return <button onClick={()=> clickMe()}>Click Me</button>
}
export default ReusableButton