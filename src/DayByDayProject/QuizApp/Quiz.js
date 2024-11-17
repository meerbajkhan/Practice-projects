import React, { useState } from 'react'
import QuestionList from './QuestionList'
import './Ques.css'



function Quiz() {
  
    const questions = [
      {
        question: "Which one is a JavaScript framework?",
        options: ["React", "HTML", "CSS", "SQL", "Photoshop"],
        answer: "React"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Styling System", "Cascading Script Sheets", "Content Style Source", "Central Styling Software"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is an API?",
        options: ["Application Programming Interface", "Android Programming Interface", "Application Public Interface", "Automatic Program Initialization", "Access Point Interface"],
        answer: "Application Programming Interface"
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "Java Styling Object Node", "Java Script Oriented Notation", "Java Source Object Node", "None of the above"],
        answer: "JavaScript Object Notation"
    },
    ]
  
  const[currBook , setCurrBook] = useState(0);
  const[currAns , setCurrAns]= useState(null);
  const[score , setScore] = useState(0);

  const handleClickAns = (opt)=>{
   setCurrAns(opt);
   if(opt === questions[currBook].answer) {
    setScore(score+1);
   }
  
  }
  const handleNext=()=>{
    setCurrBook(currBook+1);
    
    // setCurrAns(null);
  }
  return (
    <div className='main'>
      {
        currBook < questions.length ? <div>
      
      <QuestionList  question = {questions[currBook].question}
      options = {questions[currBook].options} 
      handleClickAns = {handleClickAns}
      currAns= {currAns} />
       <button disabled={currAns ===null} onClick={handleNext}>Next</button>
     </div> : <div>Total score is: {score}</div>}

    </div>
  )
}

export default Quiz

