import React, { useState } from 'react'

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState({
    heading: '',
    content: '',
    date: '',
  });
  const [editItem, setEditItem] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    })
  }
  const handleAdd = (e) => {
    e.preventDefault();
    if (editItem != null) {
      let update = notes.map((item, idx) =>
        idx === editItem ? input : item
      );
      setNotes(update)
      setEditItem(null);

    }
    else {
      let add = [...notes, input];
      setNotes(add);
    }
    setInput({ heading: '', content: '', date: '' });
    console.log(input)
  }

  const handleDelete = (id) => {
    let del = notes.filter((currVal, idx) => {
      return id != idx;
    })
    setNotes(del)
  }

  const handleEdit = (id) => {
    let edit = notes.find((currVal, idx) => {
      return id === idx;
    })
    console.log(edit);
    setInput(edit);
    setEditItem(id);
  }
  return (
    <div>
      <div>
        <label>Heading</label>
        <input type='text' name='heading' value={input.heading} onChange={handleChange}></input>
      </div>
      <div>
        <label>Content: </label>
        <textarea name='content' value={input.content} onChange={handleChange}></textarea>
      </div>
      <div>
        <input
          type="date"
          name='date'
          value={input.date}
          onChange={handleChange}

        />
      </div>
      <button onClick={handleAdd}>Add</button>
      <div>
        {
          notes.map((val, idx) => (
            <div>
              <h1>{val.heading}</h1>
              <h1>{val.content}</h1>
              <h1>{val.date}</h1>
              <button onClick={() => handleEdit(idx)}>Edit</button>
              <button onClick={() => handleDelete(idx)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default NotesList