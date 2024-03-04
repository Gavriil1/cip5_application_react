import React, { useState } from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { Form, Button, Alert, Container } from 'react-bootstrap';
import style from  "../../styles/Contact.module.css";

const ContactForm = () => {
    const currentUser = useCurrentUser();
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [error, setError] = useState(null);
    const [ notValidEmail, setNotValidEmail] = useState(false); // State to control alert visibility

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!currentUser) {
            history.push("/signin");
            return;
        }

        try {
            const { data } = await axiosReq.post("api/contact/", formData);
            handleEmailSend();
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setError(err.response?.data.email);
                setNotValidEmail(true); 
            }
        }
    };

    const handleEmailSend = () => {
        console.log("email sent!");
        history.push({
            pathname: "/notes",
            state: { emailAlert: true }
        });
    };

    return (
        <div className="main_container" style={{ marginBottom: "150px" }}>
            <Container>
                { notValidEmail && <Alert variant="danger" dismissible onClose={() => setNotValidEmail(false)} style={{ textAlign: "center" }}>Email is not Valid</Alert>} 
            </Container>
            <div className={'d-flex justify-content-center h-100 '}>
                <div className={`card-body ${style.card_body_task_form}`} style={{ height: 570 }}>
                    <h1 className="text-black text-center">Feedback Form</h1>
                    <br></br>
                    <Form
                        id="contact-form"
                        name="contact-form"
                        onSubmit={handleSubmit}
                        style={{ maxWidth: '100%', margin: '0 auto' }}
                    >
                        <Form.Group controlId="name">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                maxLength={200}
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Your email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type="text"
                                name="subject"
                                maxLength={200}
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="message">
                            <Form.Label>Your message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary"
                            type="submit"
                            className={`btn btn-lg btn-block float-right ${style.Button} ${style.Blue}`}
                        >
                            Send Feedback
                        </Button>
                    </Form>
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
