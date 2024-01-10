import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <article
      className="note"
      onClick={() => props.expandNote(props.id, props.title, props.content)}
    >
      <content>
        <h1 className="title-color">{props.title}</h1>
        <p className="description-color">{props.content}</p>
      </content>
      <button
        onClick={(e) => {
          props.deleteNote(props.id);
          e.stopPropagation();
        }}
      >
        <DeleteIcon fontSize="large" />
      </button>
    </article>
  );
}

export default Note;
