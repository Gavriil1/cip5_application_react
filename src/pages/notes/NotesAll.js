import React, { useState, useEffect } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@mui/icons-material/Edit';
import NoteModal from "./NoteModal";
import Header from "./Header";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import CreateArea from "./CreateArea";


function App() {
  const [notesList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Other state variables for the modal
  // const [modalShow, setModalShow] = React.useState(false);
  // const [modalTitle, setModalTitle] = useState("");
  // const [modalContent, setModalContent] = useState("");
  // const [modalId, setModalId] = useState();
  // const [isEditable, setIsEditable] = useState(true);
  const history = useHistory();

  const currentUser = useCurrentUser();
  const [like_id, setLikeId] = useState();
  

// useEffect(() => {

//   const likedNote = notesList.results.find((note) => note.like_id !== null);
//   if (likedNote) {
//     setLikeId(likedNote.like_id);
//   }
// }, [notesList.results]);

  const handleLike = async (id) => {
    console.log("this is id of note")
    console.log(id)
    console.log(like_id)
    try {
      const { data } = await axiosRes.post("/likes/",  { post: id });
      console.log("how are you")
      console.log(like_id)
      setLikeId(data.id); 
      console.log(like_id)
    } catch (err) {
      console.log(err.data);
    }
  };

  const handleUnlike = async (id) => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      console.log(like_id)
      setLikeId(0);  
      console.log(like_id)
    } catch (err) {
      console.log(err);
    }
  };
  // const handleLike = async (id) => {
  //   try {
  //     const { data } = await axiosRes.post("/likes/", { note: id });
  //     setPosts((prevPosts) => ({
  //       ...prevPosts,
  //       results: prevPosts.results.map((post) => {
  //         return note.id === id
  //           ? { ...note, likes_count: note.likes_count + 1, like_id: data.id }
  //           : post;
  //       }),
  //     }));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  


  useEffect(() => {
    let isMounted = true;

    const getAllNotes = async () => {
      try {
        const { data } = await axiosReq.get("/notes");
        if (isMounted) {
          if (Array.isArray(data.results)) {
            setNotesList(data.results);
          } else {
            console.error("Received data.results is not an array:", data.results);
          }
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          if (err.response && err.response.status === 401) {
            console.log("Unauthorized access. Redirecting to login.");
          } else {
            console.error(err);
          }
          setLoading(false);
        }
      }
    };

    getAllNotes();

    // Cleanup function to set isMounted to false when the component is unmounted
    return () => {
      isMounted = false;
    };
  }, [])

  const updateNotesList = (note) => {
    setNotesList((prev) => {
      return [note, ...prev].filter(
        (element, index, array) => array.indexOf(element) === index
      );
    });
  };

  const reloadNotes = async () => {
    try {
      const { data } = await axiosReq.get("/notes");
      if (Array.isArray(data.results)) {
        setNotesList(data.results);
      } else {
        console.error("Received data.results is not an array:", data.results);
      }
    } catch (err) {
      console.error(err);
      // Handle errors if needed
    }
  };


  const deleteNote = async (id) => {
    try {
      console.log("Deleting note with ID:", id);
      await axiosReq.delete(`/notes/${id}`);

      // Update local state to remove the deleted note
      setNotesList((prevNotes) => prevNotes.filter((note) => note.id !== id));

      // Optionally, re-fetch the notes list from the server to ensure consistency
      const { data } = await axiosReq.get("/notes");
      if (Array.isArray(data.results)) {
        setNotesList(data.results);
      } else {
        console.error("Received data.results is not an array:", data.results);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleEditClick = (id) => {
    // Redirect to the edit page for the specific note
    history.push(`/note/${id}/edit`);
  };





  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <main className="container">
        <NoteModal />
        <CreateArea reloadNotes={reloadNotes} />

        <div className="row">
          {notesList.map((note) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={note.id}>
              <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog>
                  <Modal.Header closeButton>
                    <h2 className="title-color">
                      {note.title}
                    </h2>
                  </Modal.Header>
                  <Modal.Body>
                    <p className="description-color">
                      {note.content}
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                  <button onClick={like_id === 0 ? () => handleLike(note.id) : () => handleUnlike(note.id)}>
                        {like_id === 0 ? <p>Like</p> : <p>NoLike</p>}
                  </button>
                    <button onClick={() => deleteNote(note.id)} variant="secondary">
                      <DeleteIcon fontSize="large" />
                    </button>
                    <button variant="primary" onClick={() => handleEditClick(note.id)}>
                      <EditIcon fontSize="large"/>
                    </button>
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
