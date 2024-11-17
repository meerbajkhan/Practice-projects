// NoteForm.js
import React, { useState, useEffect } from 'react';

function NoteForm({ addNote, editNote }) {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editNote) {
      setHeading(editNote.heading);
      setContent(editNote.content);
    } else {
      setHeading('');
      setContent('');
    }
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!heading || !content) return;
    addNote({
      id: editNote ? editNote.id : Date.now(),
      heading,
      content,
    });
    setHeading('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Heading"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">{editNote ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
}

export default NoteForm;
