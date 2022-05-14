import React from "react";
import { db } from "../loginsignup/firebase";
import "./fform.css";

const Form2 = () => {
  const saveAnswer = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, {});

    db.collection("SurveyResponses").add(formData);
  };

  return (
      <div>
          <div className="container">
          <h1>Fill form</h1>
          <form onSubmit={saveAnswer}>
              <h3>Name</h3>
              <input type="text" id="name" placeholder="Type Name"></input>
              <h3>CNIC</h3>
              <input type="text" id="cnic" placeholder="Type CNIC"></input>
              <h3>Ph No.</h3>
              <input type="text" id="ph no" placeholder="Type Ph"></input>
              <br></br>
              <h3>Course</h3>
              <input type="text" id="course" placeholder="Type Course Name"></input>
              

              
    
  
              
          <button>Submit</button>
        
      </form>
      
    </div> 
      </div>
    
    );
};

export default Form2;