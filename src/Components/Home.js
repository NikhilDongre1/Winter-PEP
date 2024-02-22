import React from "react";
import "./FormAction.css";
const Home = (props) => {
  
  return (
    <div className="container text-bg-light  p-5">
      <h1>Welcome to Home page</h1>
      <div className="info">
        <h4>Name  :  {props.data.name}</h4>
        <h4>Email : {props.data.email} </h4>
        <h4>Age : {props.data.age} </h4>
        <h4>Address  : {props.data.address}</h4>
       
      </div>
    </div>
  );
};

export default Home;
