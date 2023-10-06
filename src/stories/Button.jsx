// import React from 'react';
// import './button.css';

// /**
//  * Primary UI component for user interaction
//  */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };

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
