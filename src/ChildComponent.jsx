import React from "react"

class ChildComponent extends React.Component
{
    render()
    {
        return <div style={{color: "red"}}>Child Component</div>
    }
    componentWillUnmount()
    {
        console.log("Child Component unmounted!!")
    }
}

export default ChildComponent
