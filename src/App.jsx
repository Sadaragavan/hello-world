import { useState, useEffect } from 'react'

function App() {
  const [backendData, setBackendData] = useState("Loading...");

  useEffect(() => {
    // This fetch request reaches out to your FastAPI server
    fetch('http://127.0.0.1:8000/')
      .then(response => response.json())
      .then(data => setBackendData(data.message))
      .catch(error => setBackendData("Error connecting to backend!"));
  }, []);

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h2>My Full-Stack Dashboard</h2>
      <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
        <p><strong>Message from server:</strong> {backendData}</p>
      </div>
    </div>
  )
}

export default App