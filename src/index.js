import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import MyComponent from './MyComponent';
import MyFunctionalComp from './myFunctionalComp';
import FormComponent from './FormComponent';
import Navigation from '../src/React-Router-Example/Navigation';
import Home from './React-Router-Example/Home';
import Signup from './React-Router-Example/Signup';
import Signin from './React-Router-Example/Signin';
import AboutUs from './React-Router-Example/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultiComponent from './MultiComponent';
import MyClassComponent from './MyClassComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
// <React.StrictMode>
    {/* <App color="green" size="33" clickEvent={()=>{
      console.log("who clicked my button??")
      alert("who clicked my button??")
    }}/> */}
    {/* <MyComponent color="red" size="33" clickEvent={()=>{
        console.log("who clicked my button??")
        alert("who clicked my button??")
      }}/> */}
      {/* <App/> */}
      {/* <MyFunctionalComp/> */}
      {/* <MyComponent/> */}
root.render(
  
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navigation />}>
    //       <Route index element={<Home />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/signin" element={<Signin />} /> 
    //       <Route path="/aboutus" element={<AboutUs />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    // <MultiComponent/>
    <MyClassComponent/>

    // <div>
      
    //   <FormComponent/>
    // </div>
  
);
{/* </React.StrictMode> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
