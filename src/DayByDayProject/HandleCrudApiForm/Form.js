import React, { useEffect, useState } from 'react';
import './FormStyle.css';



function Form() {
  const [store, setStore] = useState([]); 
  const [accessories, setAccessories] = useState({
    id: null,
    title: '',
    body: '',
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setStore(data); 
      });
  }, []);

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setAccessories({
      ...accessories,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const requestOption = {
      method: editing ? 'PUT' : 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accessories),
    };

    const apiUrl = editing 
      ? `https://jsonplaceholder.typicode.com/posts/${accessories.id}`
      : "https://jsonplaceholder.typicode.com/posts";

    fetch(apiUrl, requestOption)
      .then((res) => res.json())
      .then((data) => {
        if (editing) {
          setStore((prevStore) =>
            prevStore.map((item) => (item.id === data.id ? data : item))
          );
        } else {
          setStore([...store, data]);
        }
        setEditing(false);
        setAccessories({ id: null, title: '', body: '' }); // Clear form fields
      });
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setStore(store.filter((data) => data.id !== id));
    })
    .catch((error) => console.error('Error deleting item:', error));
  };

  const handleEdit = (val) => {
    setEditing(true);
    setAccessories({
      id: val.id,
      title: val.title,
      body: val.body
    });
  };

  return (
    <div>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={accessories.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="body"
          value={accessories.body}
          onChange={handleChange}
        ></textarea>
      </div>
      <button onClick={handleSubmit}>
        {editing ? 'Update' : 'Submit'}
      </button>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {store.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.body}</td>
                <td>
                  <button onClick={() => handleEdit(val)}>Edit</button>
                  <button onClick={() => handleDelete(val.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Form;
