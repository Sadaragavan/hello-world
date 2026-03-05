import { useState, useEffect } from 'react'

function App() {
  // Notice we changed the starting state to an empty array []
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // Make sure this URL matches your new Python route!
    fetch('http://127.0.0.1:8000/superheroes')
      .then(response => response.json())
      .then(data => setCharacterList(data.roster))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h2>My Full-Stack Dashboard</h2>
      
      <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
        <h3>Active Roster:</h3>
        <ul>
          {/* This is the magic loop that renders the array */}
          {characterList.map((character, index) => (
            <li key={index} style={{ padding: "5px 0" }}>
              {character}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App