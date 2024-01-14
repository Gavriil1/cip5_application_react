import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";

function App() {
  const [notesList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        const { data } = await axiosReq.get("/notes");

        // Ensure data.results is an array before setting the state
        if (Array.isArray(data.results)) {
          setNotesList(data.results);
        } else {
          console.error("Received data.results is not an array:", data.results);
        }
      } catch (err) {
        console.error(err);
        // Handle errors if needed
      } finally {
        setLoading(false);
      }
    };

    // Fetch all notes
    getAllNotes();
  }, []);

  return (
    <div className="d-flex flex-column h-100">
      <main className="container">
        {/* Your components or UI elements here */}
        {notesList.map((note) => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
