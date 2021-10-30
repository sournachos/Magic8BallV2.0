import React from 'react';
import logo from '../images/logo.png';
import HistoryTable from '../components/HistoryTable/index';


function History() {


  return (
    <div className="d-flex flex-column w-100 h-100 align-items-center pt-0 pt-sm-4" >

    {/* Main Title */}
      <h1 style={{fontSize:"60px"}}>
        History
      </h1>

    {/* 8 Ball Image */}
      <img className="h-25" src={logo} alt="logo" />

    {/* Contains (in a table), local storage questions with corresponding answers
        and a button to reach the homepage   */}
      <HistoryTable/>


    </div>
  );
}

export default History;