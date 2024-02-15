import React, { useState, useEffect } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';  
import Header from "./Header";
import { Modal, Alert } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import styles from "../../styles/NotesPage.module.css";
import Container from 'react-bootstrap/Container';
import { useLocation } from "react-router";
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

  /*
   The important page displays the user’s liked pages.
   It also has a search field. Users may unlike the page,
   delete it, or click on the edit button.
  */


function NotesAll({ message, filter = "" }) {


  const [notesList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [query, setQuery] = useState("");
  

  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const [like_id, setLikeId] = useState([]);
const fetchLikes = async () => {
  try {
    const response = await axiosRes.get('/likes/');
    const data = response.data.results; 
    let postValues = [];
    for (let like of data) {
      postValues.push(like.post);
      console.log("postvalues are" + postValues)
    }


    setLikeId(postValues);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {

  fetchLikes();
}, []);

const handleLike = async (id) => {

  try {
    const { data } = await axiosRes.post("/likes/",  { post: id });



    fetchLikes();

  } catch (err) {
    console.log(err.data);
  }
};

const handleUnlike = async (noteid) => {
  try {
    const response = await axiosRes.get('/likes/');
    const data = response.data.results; 
    const like = data.find(like => like.post === noteid);
    
    if (like) {
      await axiosRes.delete(`/likes/${like.id}/`);
      fetchLikes();
    } else {
      console.log(`No like found with post value ${like_id}`);
    }
  } catch (err) {
    console.log(err);
  } 
};




  // gets all the notes from API
useEffect(() => {
  let isMounted = true;

  const getAllNotes = async () => {
    try {
      const { data } = await axiosReq.get(`/notes/?${filter}search=${query}`);
      if (isMounted) {
        if (Array.isArray(data.results) && data.results.length > 0) {
          console.log("Are you here?");
          setNotesList(data.results);
        } else {
          console.error("Received data.results is not an array or is empty:", data.results);
          console.log("are you in else")
          setNotesList([]); 
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

  return () => {
    isMounted = false;
  };
}, [ pathname, filter, query]);

  // reload the notes after changes to the notes are submitted.
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
    }
  };

  // delete the note
  const deleteNote = async (id) => {
    try {
      console.log("Deleting note with ID:", id);
      await axiosReq.delete(`/notes/${id}`);
      setNotesList((prevNotes) => prevNotes.filter((note) => note.id !== id));
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
    history.push(`/note/${id}/edit`);
  };

  //Show an alert when redirected from the edit note page after the user has pressed cancel.
  const [showSecondAlert, setShowSecondAlert] = useState(false); 
    useEffect(() => {
      if (history.location.state?.showAlert) {
        setShowSecondAlert(true);
        setTimeout(() => {
          setShowSecondAlert(false);
        }, 3000);
      }
  }, []);
    // Show an alert when redirected from the edit note page after the user has pressed Save.
    const [showThirdAlert, setShowThirdAlert] = useState(false); // Second Alert is initially hidden
    useEffect(() => {
      if (history.location.state?.showSaveAlert) {
        setShowThirdAlert(true);
        setTimeout(() => {
          setShowThirdAlert(false);
        }, 3000);
      }
  }, []);

  // Shows an alert after the note is deleted.
  const [showDeleteAlert, setShowDeletedAlert] = useState(false);
  const NoteDeletedAlert = () => {
    console.log("First Button clicked!");
    setShowDeletedAlert(true); 
    setTimeout(() => {
      setShowDeletedAlert(false);
    }, 3000);
  };
  // Displays a notification once the user has liked the note.
  const [showFirstAlert, setShowFirstAlert] = useState(false); // First Alert is initially hidden
  const likeUpdateGood = () => {
    console.log("First Button clicked!");
    setShowFirstAlert(true); // Show the first alert when the first button is clicked

    // Set a timer to hide the alert after 2 seconds
    setTimeout(() => {
      setShowFirstAlert(false);
    }, 3000);
  };
  // Shows an alert after the user has sent an email.
  const [showEmailAlert, setShowEmailAlert] = useState(false); // Second Alert is initially hidden
  useEffect(() => {
    if (history.location.state?.emailAlert) {
      setShowEmailAlert(true);
      console.log("email request received")
      setTimeout(() => {
        setShowEmailAlert(false);
      }, 3000);
    }
}, []);
 
  // Shows an alert after the note is created.
  const [showCreatenoteAlert, setShowCreatenotedAlert] = useState(false);
  useEffect(() => {

    if (history.location.state?.NoteAlert) {
      setShowCreatenotedAlert(true);
      console.log("note created alert received")
      setTimeout(() => {
        setShowCreatenotedAlert(false);
      }, 3000);
    }
}, []);

  return (
    <div className="d-flex flex-column h-100">
       <Container>
    {showSecondAlert && <Alert variant="danger" dismissible onClose={() => setShowSecondAlert(false)} style={{ textAlign: "center" }}>Note is not saved.</Alert>} 
    {showThirdAlert && <Alert variant="success" dismissible onClose={() => showThirdAlert(false)} style={{ textAlign: "center" }}>Note Was Saved</Alert>}
    {showDeleteAlert && <Alert variant="warning" dismissible onClose={() => showThirdAlert(false)} style={{ textAlign: "center" }}>The Note was deleted</Alert>}
    {showFirstAlert && <Alert variant="success" dismissible onClose={() => setShowFirstAlert(false)} style={{ textAlign: "center" }}>Like Status of a Note Updated Successfully</Alert>}
    {showEmailAlert && <Alert variant="success" dismissible onClose={() => setShowEmailAlert(false)} style={{ textAlign: "center" }}>We Received your message. Thank you !</Alert>}
    {showCreatenoteAlert && <Alert variant="danger" dismissible onClose={() => setShowCreatenotedAlert(false)} style={{ textAlign: "center" }}>Note Created Successfully.</Alert>}
  </Container>
      <Header />
      <main className="container" style={{ marginBottom: "150px" }}>
        <Form
              className={styles.SearchBar}
              onSubmit={(event) => event.preventDefault()}
            >
            <Form.Group>
            <Form.Label htmlFor="searchNotes"><strong>Search</strong></Form.Label>
            <Form.Control
              id="searchNotes"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search posts"
            />
            </Form.Group>
        </Form>

        <div style={{ marginTop: '20px' }}>
        {notesList.length === 0 && <p>{message}</p>} 
        </div>
        <p></p>

        <div className="row">
          {notesList.map((note) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={note.id}>
              <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog>
                <Modal.Header  style={{ backgroundColor: Array.isArray(like_id) && like_id.includes(note.id) ? 'yellow' : 'green' }}>
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
                  <Button onClick={() => {
                        if (Array.isArray(like_id) && like_id.includes(note.id)) {
                          handleUnlike(note.id);
                        } else {
                          handleLike(note.id);
                        }
                        likeUpdateGood();
                      }} variant="success"
                      aria-label="Like or unlike note"
                      >
                        {Array.isArray(like_id) && like_id.includes(note.id) ? <StarIcon fontSize="large"/> : <AddIcon fontSize="large"/>}
                  </Button>

                  <Button onClick={() => { deleteNote(note.id); NoteDeletedAlert(); }} variant="info"
                  aria-label="Delete note"
                  >
                      <DeleteIcon fontSize="large" />
                  </Button>

                    <Button variant="warning" onClick={() => handleEditClick(note.id)}
                    aria-label="Edit note"
                    >
                      <EditIcon fontSize="large"/>
    
                      
                    </Button>
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

export default NotesAll;

NotesAll.propTypes = {
  message: PropTypes.string,
  filter: PropTypes.string,
};
