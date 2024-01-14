import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router";

function App() {
  const [notesList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getNoteById = async (id) => {
      try {
        const { data } = await axiosReq.get(`/notes/${id}`);
        

        if (typeof data === 'object') {
          setNotesList([data]);
        } else {
          console.error("Received data is not an object:", data);
        }
      } catch (err) {
        console.error(err);

      } finally {
        setLoading(false);
      }
    };


    getNoteById(id);
  }, []);

  const handleDeleteNote = async () => {
    try {
 
      await axiosReq.delete(`/notes/${id}`);

    } catch (err) {
      console.error(err);

    }
  };

  return (
    <div className="d-flex flex-column h-100">
      <main className="container">
        {/* Your components or UI elements here */}
        {notesList.map((note) => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={handleDeleteNote}>Delete Note</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
