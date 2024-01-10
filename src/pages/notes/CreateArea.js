import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [note, setNote] = useState({});

  function handleInput(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          props.handleSubmit(note);
          setNote({
            title: "",
            content: ""
          });
          event.preventDefault();
        }}
      >
        <input
          className="title-color"
          onChange={handleInput}
          name="title"
          placeholder="Title"
          value={note.title}
          maxLength="50"
        />

        <textarea
          onChange={handleInput}
          name="content"
          placeholder="Take a note... (optional)"
          rows="3"
          value={note.content}
          className="description-color"
        />
        <button disabled={note.title ? false : true} type="submit">
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
