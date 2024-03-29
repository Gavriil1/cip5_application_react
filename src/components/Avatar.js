import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Avatar.module.css";

/*
  Avatar component with default height prop
*/

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
  text: PropTypes.string.isRequired,
};

export default Avatar;
