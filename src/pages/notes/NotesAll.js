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
import Form from "react-bootstrap/Form";
import styles from "../../styles/PostsPage.module.css";


function App() {
  const [notesList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [query, setQuery] = useState("");

  const currentUser = useCurrentUser();
  const [like_id, setLikeId] = useState([]);
  // console.log("this is my like_id: " + like_id)

// Define fetchLikes
const fetchLikes = async () => {
  try {
    // Get all likes
    // console.log("hi I am fetchLikes function")
    const response = await axiosRes.get('/likes/');
    const data = response.data.results; // adjust this line based on your API response structure
    // console.log("This is response data: " + JSON.stringify(data));
    
    // Create an array to store all post values
    let postValues = [];

    // Loop through all likes
    for (let like of data) {
      // Save the post value of each like
      postValues.push(like.post);
    }

    // Save postValues to like_id
    setLikeId(postValues);

    // Now like_id contains all the post values for each like
    // console.log(like_id);

  } catch (err) {
    // console.log(err);
  }
};

useEffect(() => {
  // Call fetchLikes
  fetchLikes();
}, []);

const handleLike = async (id) => {
  // console.log("this is id of note")
  // console.log(id)
  // console.log(like_id)
  try {
    const { data } = await axiosRes.post("/likes/",  { post: id });
    // console.log("how are you")
    // console.log(like_id)

    // Call fetchLikes to refresh like_id
    fetchLikes();

    // console.log(like_id)
  } catch (err) {
    console.log(err.data);
  }
};

const handleUnlike = async (noteid) => {
  try {
    // Get all likes
    const response = await axiosRes.get('/likes/');
    const data = response.data.results; // adjust this line based on your API response structure
    
    // Find the like with the post value saved in like_id
    // console.log("the noteid is :" + noteid)
    const like = data.find(like => like.post === noteid);
    // console.log("the noteid is :" + noteid)
    
    if (like) {
      // Delete the like
      await axiosRes.delete(`/likes/${like.id}/`);
      // console.log(like_id);
      fetchLikes();
      // console.log(like_id);
    } else {
      console.log(`No like found with post value ${like_id}`);
    }
  } catch (err) {
    console.log(err);
  } 
};





  useEffect(() => {
    let isMounted = true;

    const getAllNotes = async () => {
      try {
        // const { data } = await axiosReq.get("/notes/?search=${query}");
        const { data } = await axiosReq.get(`/notes/?search=${query}`);
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
  }, [query])

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





  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <main className="container">
        <NoteModal />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>
        <CreateArea reloadNotes={reloadNotes} />

        <div className="row">
          {notesList.map((note) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={note.id}>
              <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog>
                  <Modal.Header closeButton>
                    <h2 className="title-color">
                    {note.id} {note.title}
                    </h2>
                  </Modal.Header>
                  <Modal.Body>
                    <p className="description-color">
                      {note.content}
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                  {/* <button onClick={like_id === 0 ? () => handleLike(note.id) : () => handleUnlike(note.id)}>
                        {like_id === 0 ? <p>Like</p> : <p>NoLike</p>}
                  </button> */}
                  <button onClick={Array.isArray(like_id) && like_id.includes(note.id) ? () => handleUnlike(note.id) : () => handleLike(note.id)}>
                      {Array.isArray(like_id) && like_id.includes(note.id) ? <p>Unlike</p> : <p>Like</p>}
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
