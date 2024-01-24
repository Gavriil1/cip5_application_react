import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { fabClasses } from "@mui/material";

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
  const [like_id, setLikeId] = useState(26);




  const handleLike = async (id) => {
    console.log("this is id of note");
    console.log(id);
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      console.log("how are you");
      console.log(like_id);
      console.log("this" + data.post)
      setLikeId(data.post);
      console.log(like_id);
    } catch (err) {
      console.log(err.data);
    }
  };


  
  useEffect(() => {
    const checkLikeExists = async () => {
      try {
        // Get all likes
        const response = await axiosRes.get('/likes/');
        const data = response.data.results; // adjust this line based on your API response structure
        
        // Find the like with the specific post value

        const like = data.find(like => like.post == id);
 
        
        if (like) {
          // If a like with the specific post value is found, set like_id to the post value
          setLikeId(like.post);
        } else {
          // If no like with the specific post value is found, set like_id to false
          setLikeId(false);
        }
      } catch (err) {
        console.log(err);
        // In case of an error, set like_id to false
        setLikeId(false);
      }
    };
  
    checkLikeExists();
  }, [id]); // Add id as a dependency so the effect runs whenever id changes
   


  const handleUnlike = async () => {
    try {
      // Get all likes
      const response = await axiosRes.get('/likes/');
      const data = response.data.results; // adjust this line based on your API response structure
      
      // Find the like with the post value saved in like_id
      const like = data.find(like => like.post === like_id);
      
      if (like) {
        // Delete the like
        await axiosRes.delete(`/likes/${like.id}/`);
        console.log(like_id);
        setLikeId(false);
        console.log(like_id);
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

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title className="title-color">
          <h2 contentEditable={false} onBlur={handleTitleChange}>
            {note.title}
          </h2>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="description-color">
        <p contentEditable={false} onBlur={handleContentChange}>
          {note.content}
        </p>
      </Modal.Body>

      <Modal.Footer>
        <button
          onClick={() =>
            like_id === false ? handleLike(note.id) : handleUnlike(note.id)
          }
        >
          {like_id === false ? <p>Like</p> : <p>Unlike</p>}
        </button>
        <Button variant="secondary" onClick={() => history.goBack()}>
          Cancel
        </Button>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default EditNote;
