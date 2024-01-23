import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";

function EditNote() {
  const [errors, setErrors] = useState({});
  const [note, setNote] = useState({
    id: "",
    title: "",
    content: "",
  });

  const history = useHistory();
  const { id } = useParams();
  const [like_id, setLikeId] = useState(53);

  const handleLike = async (id) => {
    console.log("this is id of note");
    console.log(id);
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      console.log("how are you");
      console.log(like_id);
      // setLikeId(data.id);
      console.log(like_id);
    } catch (err) {
      console.log(err.data);
    }
  };

  const handleUnlike = async (id) => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      console.log(like_id);
      // setLikeId(0);
      console.log(like_id);
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
          onClick={() =>
            like_id === 0 ? handleLike(note.id) : handleUnlike(note.id)
          }
        >
          {like_id === 0 ? <p>Like</p> : <p>Unlike</p>}
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
