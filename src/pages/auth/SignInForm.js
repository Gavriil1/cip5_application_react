import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

function SignInFormtest() {
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <Container>

<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid"
          alt="Sample image"
        />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Crazy Note</p>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
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
          {/* Password input */}
          <div className="form-outline mb-3">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}

            />
            <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
            >
              Login
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <a href="#!" className="link-danger">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
      Copyright © 2024. All rights reserved.
    </div>

    <div>
      <a href="https://www.facebook.com/" className="text-white me-4">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="https://twitter.com/?lang=en" className="text-white me-4">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://telegram.org/" className="text-white me-4">
        <i className="fab fa-telegram" />
      </a>
      <a href="https://ie.linkedin.com/" className="text-white">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>

  </div> */}
</section>


    </Container>
  );
}

export default SignInFormtest;
