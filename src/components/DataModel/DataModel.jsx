import "./dataModel.css";
import PropTypes from "prop-types";

function DataModel({ children }) {
  return (
    <>
      <div className="data-model">{children}</div>
      <div className="overlay" />
    </>
  );
}

DataModel.propTypes = {
  children: PropTypes.node,
};

export default DataModel;
