import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

// this form allowes the user to change his password. This form is part of ProfilePage.

const UserPasswordForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const [showPasswordAlert, setPasswordAlert] = useState(false);
  const PasswordAlert = () => {
    console.log("First Button clicked!");
    setPasswordAlert(true); 
    setTimeout(() => {
      setPasswordAlert(false);
    }, 3000);
  };


  return (
    <>
        <Container>
            {showPasswordAlert && <Alert variant="success" dismissible onClose={() => setPasswordAlert(false)} style={{ textAlign: "center" }}>Password Updated Su.</Alert>} 
        </Container>
        <Container className={appStyles.Content}>
          <h1>Reset Password</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="newPassword"><strong>New password</strong></Form.Label>
              <Form.Control style={{ width: '50%' }}
                id="newPassword"
                placeholder="new password"
                type="password"
                value={new_password1}
                onChange={handleChange}
                name="new_password1"
              />
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label htmlFor="ConfirmNewPassword"><strong>Confirm password</strong></Form.Label>
              <Form.Control style={{ width: '50%' }}
                id="ConfirmNewPassword"
                placeholder="confirm new password"
                type="password"
                value={new_password2}
                onChange={handleChange}
                name="new_password2"
              />
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
                type="submit"
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={PasswordAlert}
            >
                save
            </Button>

          </Form>
        </Container>

        </>
  );
};

export default UserPasswordForm;