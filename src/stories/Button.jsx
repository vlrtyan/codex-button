import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import "../vendor/fonts/source-sans-3.css";

function Button({ type, size, style, isDisabled, children, iconType }) {
  const className = `button button_icon_${iconType} button_type_${type} button_size_${size} button_style_${style}`;

  return (
    <button className={className} type="button" disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["solid", "outline", "soft", "ghost"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  style: PropTypes.oneOf(["primary", "secondary", "danger"]),
};

export default Button;
