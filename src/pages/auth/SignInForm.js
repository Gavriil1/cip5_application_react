import React, { useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { Link, useHistory } from "react-router-dom";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import image from "../../assets/draw2.webp"

function SignInFormtest() {
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
    /* 
    Handles submitted in the form data on logging in
    Redirect user to home page
  */
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

  /* 
    Manages input field changes
  */
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <Container>

<section className="vh-100" style={{ marginBottom: "200px" }}>
  
<div className="divider d-flex align-items-center justify-content-center my-4">
    <h1 style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '0.5em' }}>Le Note</h1>
</div>
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img
          src={image}
          className="img-fluid"
          alt="Sample"
        />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-20">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            
          </div>
 
   
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
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
          <div className="form-outline mb-3">
            <input
              id="form3Example4"
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
          {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
          <div className="text-center text-lg-start mt-2 pt-2">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", backgroundColor: "#004085" }}
            >
              Login
            </button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
            <Container >
            <Link className="small fw-bold mt-2 pt-1 mb-0" to="/signup">
                      Already have an account? <span style={{ color: 'blue' }}>Register</span>
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
}

export default SignInFormtest;
