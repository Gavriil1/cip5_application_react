import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";

function App() {
  const [notesList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNoteById = async (id) => {
      try {
        const { data } = await axiosReq.get(`/notes/${id}`);
        
        // Ensure data is an object before setting the state
        if (typeof data === 'object') {
          setNotesList([data]);
        } else {
          console.error("Received data is not an object:", data);
        }
      } catch (err) {
        console.error(err);
        // Handle errors if needed
      } finally {
        setLoading(false);
      }
    };

    // Assuming you want to retrieve the note with id 1
    getNoteById(1);
  }, []);

  return (
    <div className="d-flex flex-column h-100">
      <main className="container">
        {/* Your components or UI elements here */}
        {notesList.map((note) => (
          <div key={note.id}>
            <h1>{note.id}</h1>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
