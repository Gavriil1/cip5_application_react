import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

// Form allows the user to change his avatar. This page is part of Pageprofile page.

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    image: "",
  });
  const { name, content, image } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, content, image } = data;
          setProfileData({ name, content, image });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const [showIconAlert, setShowIconAlert] = useState(false);
  const CreateIconAlert = () => {
    console.log("First Button clicked!");
    setShowIconAlert(true); 
    setTimeout(() => {
      setShowIconAlert(false);
    }, 3000);
  };

  const textFields = (
    <>
      <Form.Group>

      </Form.Group>

      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button style={{ float: 'left' }} className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit" onClick={CreateIconAlert}>
        save
      </Button>
    </>
  );

  return (
    <>
      <Container>
        {showIconAlert && <Alert variant="success" dismissible onClose={() => setShowIconAlert(false)} style={{ textAlign: "center" }}>Profile Picture Updated Successfully.</Alert>} 
      </Container>
      <Form onSubmit={handleSubmit}>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              <div style={{ textAlign: 'left', paddingLeft: 0 }}>
                <Form.Label htmlFor="image-upload" ><strong>Picture Upload</strong></Form.Label>
              </div>
              <div>
                {image && (
                  <figure style={{ float: 'left' }}>
                    <Image src={image} fluid alt="Profile"/>
                  </figure>
                )}
                {errors?.image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </div>
              <div>
                <Form.File
                  id="image-upload"
                  ref={imageFile}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files.length) {
                      setProfileData({
                        ...profileData,
                        image: URL.createObjectURL(e.target.files[0]),
                      });
                    }
                  }}
                />
              </div>
            </Form.Group>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Form>
    </>
  );
};

export default ProfileEditForm;
