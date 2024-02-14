import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;
  const [errors, setErrors] = useState({});
  const history = useHistory();
    /* 
    Handles changes to any of the input fields
  */
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  /* 
      Processes form data submitted during sign-up and redirects the user to the login page.
  */

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container>

    <section className="vh-100" style={{ marginBottom: "260px" }}>
    <div className="divider d-flex align-items-center justify-content-center my-4">
    <h1 style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '0.5em' }}>Le Note</h1>
</div>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://res.cloudinary.com/dtdqranu0/image/upload/v1707908088/media/ym7df1h1mbjzjsnmzsmo.webp"
              className="img-fluid"
              alt="Sign UP"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  id="form3Example3"
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Username
                </label>
              </div>
              {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
              <div className="form-outline mb-3">
                <input
                  id="form3Example4"
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
    
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
              {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}



              <div className="form-outline mb-3">
                <input
                  id="form3Example5"
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Confirm Passowrd"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
    
                />
                <label className="form-label" htmlFor="form3Example5">
                  Password
                </label>
              </div>
              {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", backgroundColor: "#004085" }}
                >
                  Sign up
                </button>
                {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
                <Container >
                    <Link className="small fw-bold mt-2 pt-1 mb-0" to="/signin">
                      Already have an account? <span style={{ color: 'blue' }}>Login</span>
                    </Link>
              </Container>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    
        </Container>
  );
};

export default SignUpForm;