import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import DeleteIcon from "@material-ui/icons/Delete";
import NoteModal from "./NoteModal";

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
        
        <article className="note">
        {notesList.map((note) => (
            
              <div key={note.id}>
                <content>
                <h2 className="title-color" >{note.title}</h2>
                <p className="description-color">{note.content}</p>
                </content>
                <button>
                  onCLick{(e) => {}}
                  <DeleteIcon fontSize="large" />
                </button>
  

          </div>
         
        ))}
        </article>
      </main>
    </div>
  );
}

export default App;
