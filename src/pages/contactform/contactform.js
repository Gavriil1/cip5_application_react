import React, { useState } from 'react';
import axios from 'axios';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import style from  "../../styles/Contact.module.css";
import Button from "react-bootstrap/Button";


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

  return (
      <div className="main_container">
          <div className={'d-flex justify-content-center h-100 '}>
              <div className={`card-body ${style.card_body_task_form}`} style={{ height: 570 }}>
              <h2 className="text-black text-center">Feedback Form</h2>
              <br></br>
                  <form
                      id="contact-form"
                      name="contact-form"
                      method="POST"
                      className="was-validated"
                      onSubmit={handleSubmit}
                      style={{ maxWidth: '100%', margin: '0 auto' }}
                  >
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
                                      value={formData.name}
                                      onChange={handleChange}
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
                                      value={formData.email}
                                      onChange={handleChange}
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
                                      value={formData.subject}
                                      onChange={handleChange}
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
                                      value={formData.message}
                                      onChange={handleChange}
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
                              value="Send Feedback"
                              className={`btn btn-lg btn-block float-right ${style.login_btn_task_form}`}
                          />
                      </div>
                  </form>
              </div>
              {/* <div className="card-footer"></div> */}
          </div>
      </div>
  );
};

export default ContactForm;