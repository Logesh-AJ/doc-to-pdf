import { useState } from "react"
import axios from "axios"

function App() {
  const [message, setMessage] = useState("")

  const connectBackend = async () => {
    try {
      const response = await axios.get("http://localhost:8000/")
      setMessage(response.data.message)
    } catch (error) {
      console.error(error)
      setMessage("Backend connection failed")
    }
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>DOCX to PDF Converter</h1>

      <button onClick={connectBackend}>
        Connect Backend
      </button>

      <p>{message}</p>
    </div>
  )
}

export default App