import "./dataModel.css";

function DataModel({ children }) {
  return (
    <>
      <div className="data-model">
        {children}
      </div>
      <div className="overlay" />
    </>
  );
}

export default DataModel;