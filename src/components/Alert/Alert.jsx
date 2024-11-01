import "./alert.css";
import PropTypes from "prop-types";

function Alert({ status, message }) {
  let textColor = "";
  let borderColor = "";

  switch (status) {
    case "success":
      textColor = "#00b400";
      borderColor = "#00b400";
      break;
    case "fail":
      textColor = "#ff0000";
      borderColor = "#0000ff";
      break;
  }

  return (
    <div
      className="alert-container"
      style={{ border: `1px solid ${borderColor}`, color: textColor }}
    >
      <span>
        <i className="ri-error-warning-line"></i> تنبيه !
      </span>
      <span> {message}</span>
    </div>
  );
}

Alert.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
};

export default Alert;
