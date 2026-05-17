const MyChildComponent2 = (props) =>{
    console.log("props from MyChildComponent2: ", props)
    return <div>
        <h3>This is my Child Component 2</h3>
        <br/>
        <label>Parent Counter: {props.counter}</label>
    </div>
}
export default MyChildComponent2