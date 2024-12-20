import "./App.css";
import { Button } from "./components";
import { Communication, Registration, Upload } from "./views";

function App() {
  return (
    <div className="main-container">
      <h2>تسجيل جهة حكومية</h2>
      <span className="below-heading">يرجى ملء المعلومات التالية للتسجيل</span>
      <section className="registration-container">
        <div className="registration-heading-box">
          <span>تسجيل حساب جهة حكومية</span>
        </div>
        <Registration />

        <Communication />

        <Upload />
      </section>
      <div className="main-buttons-cont">
        <Button text="انشاء حساب" />
        <Button text="خروج" />
      </div>
    </div>
  );
}

export default App;
