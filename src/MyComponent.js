// const MyComponent = () =>
// {
//     return <h1>Hello SkillVerse</h1>
// }

import React from "react";

class MyComponent extends React.Component
{
    state = {incrementCounter: 0}
    constructor(props)
    {
        super(props)
        console.log("Constructor of MyComponent")
    }

    incrementMyCounter = ()=>{
        this.setState({incrementCounter: this.state.incrementCounter+1})
    }

    static getDerivedStateFromProps()
    {
        console.log("getDerivedStateFromProps of MyComponent")
    }

    componentDidMount()
    {
        console.log("componentDidMount of MyComponent")
        console.log("--------------------------------")
    }

    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdate of MyComponent")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("getSnapshotBeforeUpdate of MyComponent")
        console.log("PrevProp: ",prevProps)
        console.log("prevState: ",prevState)
        console.log("prop: ",this.props)
        console.log("state: ",this.state)
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate of MyComponent")
    }

    render()
    {
        console.log("render of MyComponent")
        return <div>
            <h1 onClick={()=>this.props.clickEvent()} style={{color: this.props.color}}>This is my heading tag</h1>
            <br></br>
            <label>My Counter is: {this.state.incrementCounter}</label>
            <br></br>
            <button onClick={()=>this.incrementMyCounter()}>Increment me</button>
        </div>
    }
}


export default MyComponent;