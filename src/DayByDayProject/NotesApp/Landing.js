import React, { useState } from 'react';
import './Notes.css'; // Import a CSS file for styling

const Landing = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ heading: '', text: '', date: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);
  const[searchItem , setISSearchItem] = useState('');

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };
  const handleSearch =(e)=>{
    setISSearchItem(e.target.value.toLowerCase());
    console.log(searchItem);
  }

 let filterOut= notes.filter((currVal)=>{
    return currVal.heading.toLowerCase().includes(searchItem);
  })

  // Handle form submit
  const handleAddOrUpdateNote = () => {
    if (!note.heading || !note.text || !note.date) return;

    if (isEditing) {
      // Update existing note
      const updatedNotes = notes.map((item, index) =>
        index === currentNoteIndex ? note : item
      );
      setNotes(updatedNotes);
      setIsEditing(false);
      setCurrentNoteIndex(null);
    } else {
      // Add new note
      setNotes([...notes, note]);
    }
    setNote({ heading: '', text: '', date: '' });
  };

  // Handle edit button click
  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentNoteIndex(index);
    setNote(notes[index]);
  };

  // Handle delete button click
  const handleDelete = (index) => {
    const filteredNotes = notes.filter((_, i) => i !== index);
    setNotes(filteredNotes);
  };

  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <div>
        <input type='search' name='search'  onChange={handleSearch} />
      </div>
      <div className="note-form">
        <input
          type="text"
          name="heading"
          placeholder="Heading"
          value={note.heading}
          onChange={handleChange}
        />
        <textarea
          name="text"
          placeholder="Enter your note here..."
          value={note.text}
          onChange={handleChange}
        ></textarea>
        <input
          type="date"
          name="date"
          value={note.date}
          onChange={handleChange}
        />
        <button onClick={handleAddOrUpdateNote}>
          {isEditing ? 'Update Note' : 'Add Note'}
        </button>
      </div>

      <div className="notes-container">
        {filterOut.map((note, index) => (
          <div className="note-card" key={index}>
            <h3>{note.heading}</h3>
            <p>{note.text}</p>
            <small>{note.date}</small>
            <div className="note-actions">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
