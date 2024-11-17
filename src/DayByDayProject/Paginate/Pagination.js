import React, { useState } from 'react'
import user from './users.json'
import './Table.css'


function Pagination() {
  const[currPage , setCurrPage] = useState(1);
  const[pagePerItem , setPagePerItem] = useState(5);
  
  const idxOfLAstEle = pagePerItem * currPage;
  const idxofFirstEle = idxOfLAstEle - pagePerItem;
  const activeChange = user.slice(idxofFirstEle , idxOfLAstEle);
  console.log(activeChange);
  const totalPage = user.length / pagePerItem;

  const handleCurrPAge=(page)=>{
setCurrPage(page);
  }

  const handPrev=()=>{
    setCurrPage((page)=>Math.max(page-1,1));
  }
  const handleNext=()=>{
    setCurrPage((page)=>Math.min(page+1,totalPage));
  }

  return (
    <div className='Pagination'>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Occupation</th>
          </tr>
          </thead>
        <tbody>
       {
       activeChange.map((val, idx)=>(
        <tr key={idx}>
          <td>{val.id}</td>
          <td>{val.name}</td>
          <td>{val.age}</td>
          <td>{val.occupation}</td>
        </tr>
       ))
      

       }
       <button onClick={handPrev}>prev</button>
   {Array.from({length:totalPage},(_,idx)=>(
    <button onClick={()=>handleCurrPAge(idx+1)}>{idx+1}</button>
   ))}
       <button onClick={handleNext}>Next</button>
        </tbody>
      </table>
      </div>
  )
}

export default Pagination