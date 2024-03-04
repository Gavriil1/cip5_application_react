import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css";
import PropTypes from 'prop-types';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const { title, content } = note;
  const [showCreatenoteAlert, setShowCreatenoteAlert] = useState(false);

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) {
      setShowCreatenoteAlert(true);
      setTimeout(() => setShowCreatenoteAlert(false), 2000); // Dismiss alert after 2 seconds
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    try {
      const postResponse = await axiosReq.post("/notes/", formData);
      props.reloadNotes();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <>
      <Container>
        {showCreatenoteAlert && (
          <Alert variant="danger" dismissible onClose={() => setShowCreatenoteAlert(false)} style={{ textAlign: "center" }}>
            Please enter a title and content.
          </Alert>
        )}
      </Container>
      <div>
        <Form
          className="create-note"
          onSubmit={(event) => {
            handleSubmit(event);
            setNote({
              title: "",
              content: "",
            });
            event.preventDefault();
          }}
        >
          <Form.Group>
            <Form.Label htmlFor="title">
              <strong>Title</strong>
            </Form.Label>
            <Form.Control
              id="title"
              className="title-color"
              type="text"
              onChange={handleChange}
              name="title"
              placeholder="Title"
              value={note.title}
              maxLength="50"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="note">
              <strong>Note</strong>
            </Form.Label>
            <Form.Control
              id="note"
              onChange={handleChange}
              name="content"
              as="textarea"
              placeholder="Take a note... (optional)"
              rows="3"
              value={note.content}
              className="description-color"
            />
          </Form.Group>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CreateArea;

CreateArea.propTypes = {
  reloadNotes: PropTypes.func.isRequired,
};
