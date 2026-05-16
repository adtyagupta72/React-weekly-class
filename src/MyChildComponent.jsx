import MyComponent from "./MyComponent"

const MyChildComponent = (props) =>{

    console.log("props from MyChildComponent: ", props)

    return <div>
        <h2>This is my Child component</h2>
    </div>
}
export default MyChildComponent