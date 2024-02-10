import React, { useState } from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import style from  "../../styles/Contact.module.css";

// Form is used created to allow user to send email to the customer.

const ContactForm = () => {
  const currentUser = useCurrentUser();
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

      if (!currentUser) {
          history.push("/signin");
          return;
      }

      try {
          const { data } = await axiosReq.post("api/contact/", formData);
          history.push(`/notes`);
      } catch (err) {
          console.log(err);
          if (err.response?.status !== 401) {
              setErrors(err.response?.data);
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
      <div className="main_container">
          <div className={'d-flex justify-content-center h-100 '}>
              <div className={`card-body ${style.card_body_task_form}`} style={{ height: 570 }}>
              <h1 className="text-black text-center">Feedback Form</h1>
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
                                  <label htmlFor="name" className="text-black">
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
                                  <label htmlFor="email" className="text-black">
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
                                  <label htmlFor="subject" className="text-black">
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
                                  <label htmlFor="message" className="text-black">
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
                              onClick={handleEmailSend}
                          />
                      </div>
                      
                  </form>
              </div>
          </div>
      </div>
  );
};

export default ContactForm;