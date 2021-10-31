import React, { useState, useRef } from 'react';


function Form() {

  //Getting the user's question
  const questionRef = useRef();

  //Grabbing the submit button for loader animation
  const submitRef = useRef();

  //Declaring to later give it the question && answer value
  let question = null;
  const [answer, setAnswer] = useState('Magic is everywhere!');



  const ApiCall = () => {

    //regex to make sure the questions has only letters, numbers, apostrophes,
    //one consecutive white space, and a question mark
    if (questionRef.current.value.match(/^[A-Za-z'0-9 ]+[?]/)) {

      submitRef.current.style.animation = "wiggle .5s"

      //setting the user input to the question variable
      question = questionRef.current.value;

      //making a call to the API passing in the user question
      fetch("https://8ball.delegator.com/magic/JSON/" + question)
        .then(response => response.json())
        .then(json => {

          //showing the response to the user
          setAnswer(json.magic.answer);

          //setting the question and the answer in local storage
          localStorage.setItem(question, json.magic.answer);

          submitRef.current.style.animation = "none"
        })
        .catch((err) => {
          //Console log the error and letting the user know 
          //that there was an error
          console.log(err);
          setAnswer("Error Occurred, Try Again");
        });

    } else {
      //user error handling if question parameters were not met (line19)
      setAnswer("Incorrect Question Syntax, Try Again");
    }

  }


  return (
    <div className="d-flex flex-column align-items-center w-50 h-50 mt-4">

      {/* Displays API call response */}
      <div className="mw-75 text-center text-white" style={{ fontSize: "20px" }}>{answer}</div>

      {/* Input where user types their question */}
      <input ref={questionRef} type="text" className="mw-75 bg-white mt-2 form-control" placeholder="Type Question Here..." style={{ fontSize: "20px" }} aria-label="Input where user question is written" aria-describedby="inputGroup-sizing-default" ></input>

      {/* Button submits user question and triggers API call */}
      <button ref={submitRef} onClick={ApiCall} className="btn mt-1 mt-sm-4" aria-label="Button to submit user question" style={{ fontSize: "20px", backgroundColor:"#f25f25" }}>Submit!</button>

      {/* Button that links to the history page */}
      <a href="/history" className="btn mt-1 mt-sm-4" role="button" aria-label="Button to see last searched question on a new page" style={{ fontSize: "20px", backgroundColor:"#25b8f2" }}>History</a>

    </div>
  );
}

export default Form;