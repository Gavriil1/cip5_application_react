import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import DeleteIcon from "@material-ui/icons/Delete";
import NoteModal from "./NoteModal";
import Note from "./Note"
import Header from "./Header";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function App() {
  const [notesList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = useCurrentUser();

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        const { data } = await axiosReq.get("/notes");
        if (Array.isArray(data.results)) {
          setNotesList(data.results);
        } else {
          console.error("Received data.results is not an array:", data.results);
        }
      } catch (err) {
        if (err.response && err.response.status === 401) {
          // Handle unauthorized access, e.g., redirect to login page
          console.log("Unauthorized access. Redirecting to login.");
        } else {
          console.error(err);
          // Handle other errors if needed
        }
      } finally {
        setLoading(false);
      }
    };
  
    // Fetch all notes
    getAllNotes();
  }, [currentUser]);

  function updateNotesList(note) {
    setNotesList((prev) => {
      return [note, ...prev].filter(
        (element, index, array) => array.indexOf(element) === index
      );
    });
  }

  // function deleteNote(id) {
  //   setNotesList((prev) => {
  //     return prev.filter((note, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  const deleteNote = async (id) => {
    try {
      console.log("Deleting note with ID:", id);
      await axiosReq.delete(`/notes/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

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
            
          //     <div key={note.id}>
          //       <content>
          //       <h2 className="title-color" >{note.title}</h2>
          //       <p className="description-color">{note.content}</p>
          //       </content>
          //       <button>
          //         onCLick{(e) => {}}
          //         <DeleteIcon fontSize="large" />
          //       </button>
  

          // </div>
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
      {notesList.map((note) => {
        return (
          <div className="modal show"
          style={{ display: 'block', position: 'initial' }}
          >
        
              <div key={note.id}>
              <Modal.Dialog>
              <Modal.Header closeButton>
                  <h2 className="title-color">{note.title}</h2>
                  </Modal.Header>
                  <Modal.Body>
                  <p className="description-color">{note.content}</p>
                  </Modal.Body>
                  <Modal.Footer>
                  <button onClick={() => deleteNote(note.id)} variant="secondary">
                      <DeleteIcon fontSize="large" />
                  </button>
                  <button variant="primary" onClick={() => deleteNote(note.id)}>
                      edit
                  </button>
                  </Modal.Footer>
                  </Modal.Dialog>
              </div>
          
            </div>


        );
      })}
    </main>

  </div>
  );
}

export default App;
