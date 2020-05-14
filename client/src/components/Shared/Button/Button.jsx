import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, targetId }) => {
  console.log(targetId)
  return (
    <button
      className="btn btn-primary"
      type="button"
      data-toggle="modal"
      data-target={targetId}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
