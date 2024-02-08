import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      // history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  // Create alert for username form.
  const [showUsernameAlert, setShowUsernameAlert] = useState(false);
  const editUsername = () => {
    console.log("First Button clicked!");
    setShowUsernameAlert(true); 
    setTimeout(() => {
      setShowUsernameAlert(false);
    }, 3000);
  };


  return (
        <>  
        <Container>
        {showUsernameAlert && <Alert variant="success" dismissible onClose={() => setShowUsernameAlert(false)} style={{ textAlign: "center" }}>Username Updated Successfully.</Alert>} 
        </Container>
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit} className="my-2" >
            <Form.Group>
              <Form.Label htmlFor="ChangeUsername"><strong>Change username</strong></Form.Label>
              <Form.Control style={{ width: '50%' }}
                placeholder="username"
                id = "ChangeUsername"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            {/* <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
            >
              cancel
            </Button> */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              type="submit"
              onClick={editUsername}
            >
              save
            </Button>
          </Form>
        </Container>

        </>
  );
};

export default UsernameForm;