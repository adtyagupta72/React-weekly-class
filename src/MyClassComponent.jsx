import React from "react"

class MyClassComponent extends React.Component
{
    state = { counter: 0}
    constructor()
    {
        super()
        console.log("Consturctor called!")
    }

    incrementCounter()
    {
        this.setState({counter: this.state.counter+1})
    }

    static getDerivedStateFromProps()
    {
        console.log("Inside the getDerivedStateFromProps")
    }
    render()
    {
        console.log("Inside the render method")
        console.log(this.props)
        return (
            <button onClick={this.incrementCounter}>Click me</button>
        )
    }
    componentDidMount()
    {
        console.log("Inside the componentDidMount method")
    }
}
export default MyClassComponent