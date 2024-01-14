import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import NoteModal from "./NoteModal";
import styles from "../../styles/NoteMainPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";

function App() {
  const [notesList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        const { data } = await axiosReq.get("/notes");

        // Ensure data is an array before setting the state
        if (Array.isArray(data)) {
          setNotesList(data.results);
        } else {
          console.error("Received data is not an array:", data);
        }
      } catch (err) {
        console.error(err);
        // Handle errors if needed
      } finally {
        setLoading(false);
      }
    };

    getAllNotes();
  }, []);

  function updateNotesList(note) {
    setNotesList((prev) => {
      return [note, ...prev].filter(
        (element, index, array) => array.indexOf(element) === index
      );
    });
  }

  function deleteNote(id) {
    setNotesList((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }

  const [modalShow, setModalShow] = React.useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalId, setModalId] = useState();

  function expandNote(id, title, content) {
    setModalShow(true);
    setModalTitle(title);
    setModalContent(content);
    setModalId(id);
  }

  function saveNote(id, event) {
    const { innerText } = event.target;
    setNotesList((prev) => {
      return prev.map((note, index) => {
        if (index === id) {
          return {
            ...note,
            [event.target.getAttribute("data-name")]: innerText
          };
        }
        return note;
      });
    });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex flex-column h-100">
      <main className="container">
        <CreateArea handleSubmit={updateNotesList} />
        <NoteModal
          title={modalTitle}
          content={modalContent}
          id={modalId}
          show={modalShow}
          setModalShow={setModalShow}
          onHide={() => setModalShow(false)}
          saveNote={saveNote}
        />
        {notesList.map((note, id) => (
          <Note
            expandNote={expandNote}
            deleteNote={deleteNote}
            id={id}
            key={id}
            title={note.title}
            content={note.content}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
