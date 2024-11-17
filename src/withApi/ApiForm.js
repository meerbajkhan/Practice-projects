import React, { useEffect, useState } from 'react'

 function ApiForm() {
    
    const [isListVisible, setIsListVisible] = useState(false);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const handleToggle = () => {
      setIsListVisible(!isListVisible); // Toggle the visibility
    };

  
        useEffect(() => {
      // Fetching data from an API
      const fetchData = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos"); // Example API
          const data = await response.json();
          setItems(data.slice(0, 10)); // Assuming we only want the first 10 items
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
  return (
    <>
    <div>
      <button onClick={handleToggle}>
        {isListVisible ? "Hide List" : "Show List"}
      </button>

      {isListVisible && (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
    </>
  );
}



export default ApiForm;
    
