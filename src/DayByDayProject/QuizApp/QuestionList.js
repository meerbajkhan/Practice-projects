import React from 'react'
import './List.css'



function QuestionList({question, options, handleClickAns, currAns}) {
  return (
    <div className='questionList'>
    <h1>{question}</h1>
    <ul>
      {
        options.map((opt ,idx)=>(
          <li key={idx} onClick={()=>handleClickAns(opt)} className= {currAns === opt ? 'selected' : ''}>{opt}</li>
         
        ))
        
      }
      
    </ul>

    </div>
  )
}

export default QuestionList