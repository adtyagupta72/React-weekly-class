// const MyComponent = () =>
// {
//     return <h1>Hello SkillVerse</h1>
// }

import React, { useState } from "react";
import MyChildComponent from "./MyChildComponent";
import MyChildComponent2 from "./MyChildComponent2";

// class MyComponent extends React.Component
// {
//     state = {incrementCounter: 0}
//     constructor(props)
//     {
//         super(props)
//         console.log("Constructor of MyComponent")
//     }

//     incrementMyCounter = ()=>{
//         this.setState({incrementCounter: this.state.incrementCounter+1})
//     }

//     static getDerivedStateFromProps()
//     {
//         console.log("getDerivedStateFromProps of MyComponent")
//     }

//     componentDidMount()
//     {
//         console.log("componentDidMount of MyComponent")
//         console.log("--------------------------------")
//     }

//     shouldComponentUpdate()
//     {
//         console.log("shouldComponentUpdate of MyComponent")
//         return true
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState)
//     {
//         console.log("getSnapshotBeforeUpdate of MyComponent")
//         console.log("PrevProp: ",prevProps)
//         console.log("prevState: ",prevState)
//         console.log("prop: ",this.props)
//         console.log("state: ",this.state)
//     }

//     componentDidUpdate()
//     {
//         console.log("componentDidUpdate of MyComponent")
//     }

//     render()
//     {
//         console.log("render of MyComponent")
//         return <div>
//             <h1 onClick={()=>this.props.clickEvent()} style={{color: this.props.color}}>This is my heading tag</h1>
//             <br></br>
//             <label>My Counter is: {this.state.incrementCounter}</label>
//             <br></br>
//             <button onClick={()=>this.incrementMyCounter()}>Increment me</button>
//         </div>
//     }
// }

var MyComponent = () => //Parent
{
    const [counter, setCounter] = useState(0)
    const [childCounter, setChildCounter] = useState("")
    // let myObj = {
    //     a: "A",
    //     b: "B"
    // }

    // let myObj2 = {
    //     a: "a",
    //     b: "b"
    // }

    // console.log("myObj: ", myObj)
    // console.log("myObj.a: ", myObj.a)
    // console.log("myObj2: ", myObj2)
    // console.log("myObj2.a: ", myObj2.a)

    // myObj.a = "1"
    // console.log("myObj: ", myObj)
    // console.log("myObj.a: ", myObj.a)
    // console.log("myObj2: ", myObj2)
    // console.log("myObj2.a: ", myObj2.a)

    // let myObj3 = myObj
    // console.log("myObj3: ", myObj3)
    // console.log("myObj3.a: ", myObj3.a)
    // console.log("------------")

    // myObj.b = 10

    // console.log("myObj3: ",     )
    // console.log("myObj3.a: ", myObj3.a)
    // console.log("myObj3.b: ", myObj3.b)

    // console.log("myObj: ", myObj)
    // console.log("myObj.a: ", myObj.a)
    // console.log("myObj.b: ", myObj.b)

    // console.log("------------")

    // myObj2 = Object.assign({}, myObj)
    // console.log("myObj:", myObj)
    // console.log("myObj2:", myObj2)
    // myObj.a = 3
    // console.log("myObj:", myObj)
    // console.log("myObj2:", myObj2)
    // var myArray = [
    //     1, 
    //     "2",
    //     3,
    //     function(){
    //         console.log("This is my Function from Array!!")
    //     }
    // ]

    // console.log(myArray[3])
    // myArray[3]()
    //console.log(myArray[3]())

    // var myObj = {
    //     a: "A",
    //     b: "B",
    //     myFunction: function(){
    //         console.log("This is myFunction from the Object")
    //     }
    // }

    // console.log(myObj.myFunction)
    // console.log(myObj.myFunction())

    // let myTempFunction = () =>{
    //     console.log("This is myTempFunction")
    // }

    // myTempFunction()
    // console.log(myTempFunction)

    // function myTempFunction1()
    // {
    //     console.log("this is myTempFunction1")
    // }

    // console.log(myTempFunction1)
    // myTempFunction1()

    // function myTempFunction2()
    // {
    //     console.log("This is myTempFunction2")
    //     //return true
    // }

    // let result = myTempFunction2()
    // console.log(result) //

    // console.log(myTempFunction2())  //


    // console.log(myArray[3])

    // function makeHelloFunction()
    // {
    //     const message = "Hello!"
    //     function sayHello()
    //     {
    //         console.log(message)
    //     }
    //     return sayHello
    // }
    // const sayHello = makeHelloFunction()
    // //console.log(message) //Error

    // sayHello()

    // (function (){
    //     console.log("This is myFunc")
    // })()

    // let num = 10
    // console.log("num: ", num)
    // console.log("typeof num: ", typeof num)

    //explicit
    // let strNum = String(num)
    // console.log("strNum: ", strNum)
    // console.log("typeof strNum: ", typeof strNum)

    //implicit
    // let strNum = num+""
    // console.log("strNum: ", strNum)
    // console.log("typeof strNum: ", typeof strNum)

    function incrementCounter()
    {
        setCounter(counter+1)
    }

    function getChildData(childCounterTemp)
    {
        console.log("getChildData called in parent: ", childCounterTemp)
        setChildCounter(childCounterTemp)
    }

    return <div>
        <h1>Hello Parent</h1>
        <br/>
        <button onClick={()=>incrementCounter()}>Increment Parent Counter</button>
        <div>
            <MyChildComponent counter={counter} getChildData={getChildData}/>
        </div>

        <div>
            <MyChildComponent2 counter={counter} getChildData={getChildData}/>
        </div>

        <div>
            <label>Child Counter: {childCounter}</label>
        </div>
    </div>
}


export default MyComponent;