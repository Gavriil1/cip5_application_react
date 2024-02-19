import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css";
import PropTypes from 'prop-types';

// A form is created to allow the user to create a new note. Each note has a title and a textarea.

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const {title, content} = note

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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


  const [showCreatenoteAlert, setShowCreatenotedAlert] = useState(false);
  const CreateNoteAlert = () => {
    setShowCreatenotedAlert(true); 
    setTimeout(() => {
      setShowCreatenotedAlert(false);
    }, 3000);
  };
 
  return (
    <>
    <Container>
    {showCreatenoteAlert && <Alert variant="success" dismissible onClose={() => setShowCreatenotedAlert(false)} style={{ textAlign: "center" }}>Note Created Successfully.</Alert>} 
    </Container>
    <div>
      <Form
        className="create-note"
        onSubmit={(event) => {
          handleSubmit(event);
          setNote({
            title: "",
            content: ""
          });
          event.preventDefault();
        }}
      >
        <Form.Group>
        <Form.Label htmlFor="title"><strong>Title</strong></Form.Label>
          <Form.Control
            id = "title"
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
        <Form.Label htmlFor="note"><strong>Note</strong></Form.Label>
          <Form.Control
            id = "note"
            onChange={handleChange}
            name="content"
            as="textarea"
            placeholder="Take a note... (optional)"
            rows="3"
            value={note.content}
            className="description-color"
          />
        </Form.Group>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit" onClick={CreateNoteAlert}>
            create
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