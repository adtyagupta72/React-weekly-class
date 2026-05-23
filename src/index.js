import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import MyComponent from './MyComponent';
import MyFunctionalComp from './myFunctionalComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
// <React.StrictMode>
    {/* <App color="green" size="33" clickEvent={()=>{
      console.log("who clicked my button??")
      alert("who clicked my button??")
    }}/> */}
root.render(
  
    <div>
      {/* <MyComponent color="red" size="33" clickEvent={()=>{
        console.log("who clicked my button??")
        alert("who clicked my button??")
      }}/> */}
      {/* <App/> */}
      {/* <MyFunctionalComp/> */}
      <MyComponent/>
    </div>
  
);
{/* </React.StrictMode> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
