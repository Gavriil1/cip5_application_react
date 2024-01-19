import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import DeleteIcon from "@material-ui/icons/Delete";
import NoteModal from "./NoteModal";
import Note from "./Note"
import Header from "./Header";


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
          note = {
            ...note,
            [event.target.getAttribute("data-name")]: innerText
          };
        }
        return note;
      });
    });
  }

  return (
    // <div className="d-flex flex-column h-100">
    //   <main className="container">
        
        
    //     <article className="note">
    //     {notesList.map((note) => (
            
    //           <div key={note.id}>
    //             <content>
    //             <h2 className="title-color" >{note.title}</h2>
    //             <p className="description-color">{note.content}</p>
    //             </content>
    //             <button>
    //               onCLick{(e) => {}}
    //               <DeleteIcon fontSize="large" />
    //             </button>
  

    //       </div>
    //     ))}
    //     </article>
    //   </main>
    // </div>
    <div className="d-flex flex-column h-100">
    <Header />
    <main className="container">

      <NoteModal
        title={modalTitle}
        content={modalContent}
        id={modalId}
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
        saveNote={saveNote}
      />
      {notesList.map((note, index) => {
        return (
          <Note
            expandNote={expandNote}
            deleteNote={deleteNote}
            id={index}
            key={note.title + note.content}
            title={note.title}
            content={note.content}
          />
        );
      })}
    </main>

  </div>
  );
}

export default App;
