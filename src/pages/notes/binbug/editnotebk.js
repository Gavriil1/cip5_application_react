import React, { useEffect, useState } from "react";
import { Button, Modal, Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import Container from 'react-bootstrap/Container';


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
  console.log("noteid value is " + noteid);
  const [like_id, setLikeId] = useState(false);


  const [showFirstAlert, setShowFirstAlert] = useState(false); 
  const likeUpdateGood = () => {
    console.log("First Button clicked!");
    setShowFirstAlert(true); 


    setTimeout(() => {
      setShowFirstAlert(false);
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
    console.log("this is id of note");
    console.log(id);
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
      title: event.target.textContent,
    });
  };

  const handleContentChange = (event) => {
    setNote({
      ...note,
      content: event.target.textContent,
    });
  };

  const handleSubmit = async () => {
    try {
      await axiosReq.put(`/notes/${id}/`, {
        title: note.title,
        content: note.content,
      });
      history.push(`/notes`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };


   
    const [showSecondAlert, setShowSecondAlert] = useState(false); 
    const handleSecondClick = () => {
      console.log("Second Button clicked!");
      history.push({
        pathname: "/notes",
        state: { showAlert: true }
      });
    };
    
    const handleThirdClick = () => {
      console.log("Third Button clicked!");
      history.push({
        pathname: "/notes",
        state: { showSaveAlert: true }
      });
    };
    

  return (

    <>
    <Container>
    {showFirstAlert && <Alert variant="success" dismissible onClose={() => setShowFirstAlert(false)} style={{ textAlign: "center" }}>Like Status of a Note Updated Successfully</Alert>}
    {showSecondAlert && <Alert variant="success" dismissible onClose={() => setShowSecondAlert(false)} style={{ textAlign: "center" }}>The Note was saved Successfully</Alert>} 
  </Container>

    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title className="title-color">
          <h2 contentEditable={true} onBlur={handleTitleChange}>
            {note.title}
          </h2>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="description-color">
        <p contentEditable={true} onBlur={handleContentChange}>
          {note.content}
        </p>
      </Modal.Body>

      <Modal.Footer>
      <button
          onClick={() => {
            like_id === false ? handleLike(note.id) : handleUnlike(note.id);

          }}
        >
          {like_id === false ? <p>Like</p> : <p>Unlike</p>}
      </button>

      <Button variant="secondary" onClick={() => { history.push("/notes"); handleSecondClick(); }}>
           Cancel
      </Button>

      <Button variant="primary" type="button" onClick={() => { handleSubmit(); handleThirdClick(); }}>
          Save changes
      </Button>

      </Modal.Footer>
    </Modal.Dialog>
    </>
  );
}

export default EditNote;
