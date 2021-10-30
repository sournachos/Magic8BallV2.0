import React from 'react';
import logo from '../images/logo.png';
import Form from '../components/Form/index';


function Home() {


  return (
    <div className="d-flex flex-column w-100 h-75 align-items-center pt-4" >

    {/* Main Title */}
      <h1 className="mh-50" style={{fontSize:"60px"}}>
        Magic 8-Ball
      </h1>
    {/* 8 Ball Image */}
      <img className="h-50" src={logo} alt="logo" />
    {/* Contains and handles user input, API responses, and a button to reach '/history' */}
      <Form/>


    </div>
  );
}

export default Home;