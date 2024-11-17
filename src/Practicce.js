import React, { useState } from 'react'

function Practicce() {
    const[show , setShow] = useState(true);
    const[surface , setList1] = useState({
        Name : 'meerbaj',
        id: 23,
        password : 'navajkhan'
    })
    
  return (
    <>
    <div>
            
               
                {surface.map((ele,idx)=>(
                    // <li key={idx}></li>
                    <li>{ele.Name}</li>
))}
               
               
            
         
        <button onClick={()=>setShow(false)}>Submit</button>
    </div>
    
    </>
  )
}

export default Practicce