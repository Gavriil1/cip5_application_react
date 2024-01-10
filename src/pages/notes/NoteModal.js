import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function NoteModal(props) {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
      scrollable={true}
    >
      <Modal.Header className="no-border" closeButton>
        <Modal.Title
          style={{ width: "100%" }}
          id="contained-modal-title-vcenter"
        >
          <h2
            className="title-color"
            contentEditable={isEditable}
            data-name="title"
            value={props.title}
            onBlur={(event) => {
              props.saveNote(props.id, event);
            }}
            onClick={() => {
              setIsEditable(true);
            }}
          >
            {props.title} &nbsp;
          </h2>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          outline: "1px solid #cac2c0",
          height: "100%",
          padding: "0.5rem"
        }}
      >
        <p
          style={{
            height: "100%",
            padding: "0.5rem"
          }}
          className="description-color"
          onClick={() => {
            setIsEditable(true);
          }}
          contentEditable={isEditable}
          data-name="content"
          onBlur={(event) => {
            props.saveNote(props.id, event);
          }}
          value={props.content}
        >
          {props.content} &nbsp;
        </p>
      </Modal.Body>

      <Modal.Footer className="no-border">
        <Button
          style={{ background: "#4d686e", border: "none" }}
          onClick={() => {
            setIsEditable(false);
            props.setModalShow(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default NoteModal;
