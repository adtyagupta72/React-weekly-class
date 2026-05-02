// const MyComponent = () =>
// {
//     return <h1>Hello SkillVerse</h1>
// }

import React from "react";

class MyComponent extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return <h1 onClick={()=>this.props.clickEvent()} style={{color: this.props.color}}>This is my heading tag</h1>
    }
}


export default MyComponent;