import React, { useEffect ,useState } from 'react'

function Weather() {
  const[data, setData] = useState([]);
  const[input, setInput] = useState({
    title: "",
    body: "",
  });
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> res.json())
    .then((data)=>{
      // console.log(data);
    setData(data)});
  },[]);

  const handlChange=(e)=>{
    const{name,value} = e.target;
    setInput({
      ...input,
      [name]: value

    });

  } 

  const handleSubmit=(e)=>{
    e.preventDefault();
    // setData(input);

    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const requestOption = {
      method: "POST",
      headers: {
      "Content-Type" :  "application/json",
      },
   body:JSON.stringify(input)
    }
    fetch(apiUrl, requestOption)
    .then((res)=>res.json())
    .then((newdata)=>{
      console.log(newdata);
      setData([...data, newdata]);
    })
  }
  return (
    <div>
      <div>
        <label>title</label>
        <input type='text' name='title' value={input.title} onChange={handlChange}></input>
      </div>
      <div>
        <label>Body:</label>
        <input type='text' name='body'value={input.body} onChange={handlChange}></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      <table>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
             {
            data.map((list,index)=>(
                <tr key={index}>
                {/* <td>{list.id}</td> */}
                <td>{list.title}</td>
                <td>{list.body}</td>
              </tr>
                
            ))
        }
        </tbody>
        
      </table>
    </div>
  )
}

export default Weather


//////////////////////////////
// import React, { useEffect, useState } from 'react';

// function Weather() {
//   const [data, setData] = useState([]);
//   const [input, setInput] = useState({
//     title: "",
//     body: "",
//   });

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInput({
//       ...input,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const apiUrl = "https://jsonplaceholder.typicode.com/posts";
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(input),
//     };

//     fetch(apiUrl, requestOptions)
//       .then((res) => res.json())
//       .then((newData) => {
//         console.log(newData);
//         setData([...data, newData]);  // Append new post to the existing data array
//       });
//   };

//   return (
//     <div>
//       <div>
//         <label>Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={input.title}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Body:</label>
//         <input
//           type="text"
//           name="body"
//           value={input.body}
//           onChange={handleChange}
//         />
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((list, index) => (
//             <tr key={index}>
//               <td>{list.title}</td>
//               <td>{list.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Weather;




