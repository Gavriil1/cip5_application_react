import React, { useState } from 'react';
import axios from 'axios';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import style from  "../../styles/Button.module.css";

const ContactForm = () => {
    const currentUser = useCurrentUser();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the user is authenticated
        if (!currentUser) {
            // Redirect to the sign-in page if not authenticated
            history.push("/signin");
            return;
        }
        
        // try {
        //     // Add authorization header with the token
        //     const config = {
        //         headers: {
        //             Authorization: `Bearer ${currentUser.auth_token}`,
        //         },
        //     };

        //     // Make the authenticated API call
        //     await axios.post('https://ci-p5-project-api-part-500c148fe358.herokuapp.com/contact', formData, config);

        //     // Handle success, e.g., show a success message or redirect
        // } catch (error) {
        //     // Handle error, e.g., show an error message
        //     console.log(error);
        // }
        try {
            const { data } = await axiosReq.post("api/contact/", formData);
            history.push(`/posts/${data.id}`);
          } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
              setErrors(err.response?.data);
            }
          }



        
    };

    console.log(currentUser);
    console.log(formData);
    return (
      
<div>
        {/* <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text"
             name="name"
             value={formData.name}
            onChange={handleChange} />

            <label>Email:</label>
            <input type="email"
             name="email"
             value={formData.email}
             onChange={handleChange} />

            <label>Subject:</label>
            <input type="text"
             name="subject"
            value={formData.subject}
            onChange={handleChange} />

            <label>Message:</label>
            <textarea name="message"
             value={formData.message} 
             onChange={handleChange} />

            <button type="submit"
            >Submit</button>
        </form> */}
        <div className="main_container">
        {/*Feedback Form
      css of feedback form was taken from https://bootsnipp.com/snippets/vl4R7
      contact form was found on google, from sites like this https://colorlib.com/wp/bootstrap-contact-form/
           */}
        <div className="d-flex justify-content-center h-100">
          <div className={style.card} style={{ height: 470, width: 1000 }}>
            <div className="card-header">
              <h2 className="text-white text-center">Feedback Form</h2>
            </div>
            <div className="card-body" style={{ height: 570 }}>
              <form
                id="contact-form"
                name="contact-form"
                method="POST"
                className="was-validated"
              >
                {/* {"{"}% csrf_token %{"}"} */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        maxLength={200}
                        required=""
                      />
                      <label htmlFor="name" className="text-white">
                        Your name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required=""
                      />
                      <label htmlFor="email" className="text-white">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        maxLength={200}
                        required=""
                      />
                      <label htmlFor="subject" className="text-white">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        id="message"
                        name="message"
                        rows={2}
                        className="form-control md-textarea"
                        required=""
                        defaultValue={""}
                      />
                      <label htmlFor="message" className="text-white">
                        Your message
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Send Feedback"
                    className="btn btn-lg btn-block float-right login_btn"
                  />
                </div>
              </form>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
      </div>
      </div>

    );
};

export default ContactForm;