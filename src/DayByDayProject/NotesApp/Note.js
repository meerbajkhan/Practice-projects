import React, { useState } from 'react'

function Note() {
  const[data, setData] = useState([]);
  const[userInput, setUserInput] = useState('');
  const[isEditItem, setIsEditItem] = useState(null);

  const handleChange = (e)=>{
    
    setUserInput(e.target.value);
   
  }

  const handleAdd=(e)=>{
    e.preventDefault();

    if (isEditItem !== null) {
      // If editing, update the note at the specified index
      const updatedData = data.map((item, idx) =>
        idx === isEditItem ? userInput : item
      );
      setData(updatedData);
      setIsEditItem(null); // Reset edit state
    } else {

    let addArr = [...data, userInput];
    setData(addArr);
    setUserInput('')
  
    console.log(addArr);

  }
}

  const handleDelete=(id)=>{
    console.log(id);
  let deletes = data.filter((user, idx)=> {
    return id != idx;
  })
  setData(deletes);
  
  }

  const handleEdit=(id)=>{
    let editInd = data.find((items, idx)=>{
      return  id === idx;
    })
    console.log(editInd);
    setUserInput(editInd);
    setIsEditItem(id);
  }
  return (
    <div>
      
      <div>
      <input type='text' name='username' value={userInput} onChange={handleChange}  />
        </div>
        <button onClick={handleAdd}>Add</button>
        <ul>
        {
          data.map((info, idx)=>(
           <li key={idx}>{info}<button onClick={()=>handleDelete(idx)}>Delete</button><button onClick={()=>handleEdit(idx)}>Edit</button></li>
          ))
        }
        </ul>
        
    </div>
  )
}

export default Note
