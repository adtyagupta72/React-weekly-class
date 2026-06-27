const ReusableButton = (props) =>
{
    console.log("Message: ", props.message)
    console.log("onButtonClick: ", props.onButtonClick)
    function clickMe()
    {
        alert(props.message ? props.message : "You click the button! Bravo!")
    }
    return <button onClick={()=> props.onButtonClick ? props.onButtonClick() : clickMe()}>Click Me</button>
}
export default ReusableButton