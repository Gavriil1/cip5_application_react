import React, { useEffect, useState } from "react";
import { Button, Modal, Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';  

function EditNote() {
  const [errors, setErrors] = useState({});
  const [note, setNote] = useState({
    id: "",
    title: "",
    content: "",
  });

  const history = useHistory();
  const { id } = useParams();
  const noteid = id;
  const [like_id, setLikeId] = useState(false);
  const [showLikeAlert, setLikeAlert] = useState(false); 
  const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const likeUpdateGood = () => {
    setLikeAlert(true); 


    setTimeout(() => {
      setLikeAlert(false);
    }, 3000);
  };

  useEffect(() => {
    const checkLikeExists = async () => {
      try {
        const response = await axiosRes.get('/likes/');
        const data = response.data.results; 
        const like = data.find(like => like.post == id);
        if (like) {
          setLikeId(like.post);
        } else {
          setLikeId(false);
        }
      } catch (err) {
        console.log(err);
        setLikeId(false);
      }
    };
  
    checkLikeExists();
  }, [id]); 

  const handleLike = async (id) => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setLikeId(data.post);
      likeUpdateGood();
    } catch (err) {
      console.log(err.data);
    }
  };

  const handleUnlike = async () => {
    try {
      const response = await axiosRes.get('/likes/');
      const data = response.data.results; 
      const like = data.find(like => like.post === like_id);
      if (like) {
        await axiosRes.delete(`/likes/${like.id}/`);
        likeUpdateGood();
        setLikeId(false);
      } else {
        console.log(`No like found with post value ${like_id}`);
      }
    } catch (err) {
      console.log(err);
    } 
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/notes/${id}/`);
        const { title, content, is_owner } = data;

        if (is_owner && title !== undefined && content !== undefined) {
          setNote({ id, title, content });
        } else {
          history.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleTitleChange = (event) => {
    setNote({
      ...note,
      title: event.target.value,
    });
  };

  const handleContentChange = (event) => {
    setNote({
      ...note,
      content: event.target.value,
    });
  };


  const handleSubmit = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      setShowEmptyFieldsAlert(true);
      setTimeout(() => setShowEmptyFieldsAlert(false), 2000);
      return;
    } else {
      try {
        await axiosReq.put(`/notes/${id}/`, {
          title: note.title,
          content: note.content,
        });
        setTimeout(() => {
              history.push({
                pathname: "/notes",
                state: { showSaveAlert: true }
              });
            }, 1000);
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    }
  };
  
  
  

  const handleCancel = () => {
    history.push({
      pathname: "/notes",
      state: { showAlert: true }
    });
  };
  

  return (
    <>
      <Container>
        {showLikeAlert && <Alert variant="success" dismissible onClose={() => setLikeAlert(false)} style={{ textAlign: "center" }}>Like Status of a Note Updated Successfully</Alert>}
        {showEmptyFieldsAlert && (
          <Alert variant="danger" dismissible onClose={() => setShowEmptyFieldsAlert(false)} style={{ textAlign: "center" }}>
            Title and content should not be empty.
          </Alert>
        )}
      </Container>

      <Modal.Dialog>
        <Modal.Header style={{ backgroundColor: like_id === false ? 'green' : 'yellow' }}>
          <Modal.Title className="title-color">
            <h1>Edit Note</h1>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="description-color">
          <Form style={{ width: '100%' }}>
            <Form.Group controlId="noteTitle">
              <Form.Label>Note Title</Form.Label>
              <Form.Control type="text" value={note.title} onChange={handleTitleChange} />
            </Form.Group>

            <Form.Group controlId="noteContent">
              <Form.Label>Note Content</Form.Label>
              <Form.Control as="textarea" value={note.content} onChange={handleContentChange} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <button 
            aria-label={like_id === false ? 'Like' : 'Unlike'}
            onClick={() => {
              like_id === false ? handleLike(note.id) : handleUnlike(note.id);
            }}
          >
            {like_id === false ? <AddIcon fontSize="large"/> : <StarIcon fontSize="large"/>}
          </button>

          <Button variant="secondary" onClick={() => { handleCancel(); }} aria-label="Cancel">
            Cancel
          </Button>

          <Button 
            style={{ backgroundColor: '#004085' }} 
            variant="primary" 
            type="button" 
            onClick={() => { handleSubmit();  }}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>


    </>
  );
}

export default EditNote;
