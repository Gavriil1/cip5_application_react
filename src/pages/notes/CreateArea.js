import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import AddIcon from "@material-ui/icons/Add";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css";

function CreateArea(props) {
  const [errors, setErrors] = useState({});
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const {title, content} = note
  const history = useHistory();

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  // function handleInput(event) {
  //   setNote((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value
  //     };
  //   });
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
  
    formData.append("title", title);
    formData.append("content", content);
  
    try {
      const { data } = await axiosReq.post("/notes/", formData);
      history.push(`/notes`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };
  
  
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

 
  return (
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
          <Form.Control
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
          <Form.Control
            onChange={handleChange}
            name="content"
            as="textarea"
            placeholder="Take a note... (optional)"
            rows="3"
            value={note.content}
            className="description-color"
          />
        </Form.Group>
  
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          onClick={() => history.goBack()}
        >
          cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          create
        </Button>
      </Form>
    </div>
  );
  


}

export default CreateArea;
