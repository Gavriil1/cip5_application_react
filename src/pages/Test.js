import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { Alert, Button } from "react-bootstrap";

function ContainerExample() {
  const [showFirstAlert, setShowFirstAlert] = useState(false); // First Alert is initially hidden

  const [showThirdAlert, setShowThirdAlert] = useState(false); // Third Alert is initially hidden

  const handleFirstClick = () => {
    console.log("First Button clicked!");
    setShowFirstAlert(true); // Show the first alert when the first button is clicked

    // Set a timer to hide the alert after 2 seconds
    setTimeout(() => {
      setShowFirstAlert(false);
    }, 3000);
  };

  const [showSecondAlert, setShowSecondAlert] = useState(false); // Second Alert is initially hidden
  const handleSecondClick = () => {
    console.log("Second Button clicked!");
    setShowSecondAlert(true); // Show the second alert when the second button is clicked

    // Set a timer to hide the alert after 2 seconds
    setTimeout(() => {
      setShowSecondAlert(false);
    }, 3000);
  };

  const handleThirdClick = () => {
    console.log("Third Button clicked!");
    setShowThirdAlert(true); // Show the third alert when the third button is clicked

    // Set a timer to hide the alert after 2 seconds
    setTimeout(() => {
      setShowThirdAlert(false);
    }, 3000);
  };

  return (
    <>
      <Container>
        {showFirstAlert && <Alert variant="primary" dismissible onClose={() => setShowFirstAlert(false)}>First Alert</Alert>} {/* First Alert is shown based on the state */}
        {showSecondAlert && <Alert variant="primary" dismissible onClose={() => setShowSecondAlert(false)}>Second Alert</Alert>} {/* Second Alert is shown based on the state */}
        {showThirdAlert && <Alert variant="primary" dismissible onClose={() => setShowThirdAlert(false)}>Third Alert</Alert>} {/* Third Alert is shown based on the state */}
      </Container>
      <Container>
        <Button color="primary" active={false} size="lg" onClick={handleFirstClick}>First</Button>{' '}
        <Button color="primary" active={false} size="lg" onClick={handleSecondClick}>Second</Button>{' '}
        <Button color="primary" active={false} size="lg" onClick={handleThirdClick}>Third</Button>{' '}
      </Container>
    </>
  );
}

export default ContainerExample;
