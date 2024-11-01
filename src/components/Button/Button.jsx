import "./button.css";
import PropTypes from "prop-types";

function Button({ text, icon, handler, disabled, specialStyles }) {
  return (
    <>
      <button
        onClick={handler}
        style={specialStyles}
        className="button-component"
        disabled={disabled}
      >
        {icon} {text}
      </button>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  handler: PropTypes.func,
  disabled: PropTypes.bool,
  specialStyles: PropTypes.object,
}

export default Button;
